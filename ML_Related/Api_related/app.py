from fastapi import FastAPI, File, UploadFile, HTTPException
from ultralytics import YOLO
import cv2
import numpy as np

app = FastAPI()

model = YOLO("best.pt")

def calculate_attentiveness(results):
    label_counts = {"hand_raising": 0, "reading": 0, "writing": 0, "neutral": 0}
    total_students = 0

    for result in results:
        boxes = result.boxes

    for cls in boxes.cls:
        class_id = int(cls.item())
        total_students += 1
        if class_id == 0:
            label_counts["hand_raising"] += 1
        elif class_id == 1:
            label_counts["reading"] += 1
        elif class_id == 2:
            label_counts["writing"] += 1
        elif class_id == 3:
            label_counts["neutral"] += 1

    attentive_students = label_counts["hand_raising"] + label_counts["reading"] + label_counts["writing"]
    attentiveness_percentage = (attentive_students / total_students) * 100 if total_students > 0 else 0
    
    return attentive_students, total_students, attentiveness_percentage

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        if not file:
            raise HTTPException(status_code=400, detail="No file uploaded")

        image_bytes = await file.read()

        nparr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if image is None:
            raise HTTPException(status_code=400, detail="Invalid image file")

        results = model.predict(source=image, save=False, conf=0.3)

        attentive_students, total_students, attentiveness_percentage = calculate_attentiveness(results)

        return {
            "attentive_students": attentive_students,
            "total_students": total_students,
            "attentiveness_percentage": f"{attentiveness_percentage:.2f}%"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error during image processing")
