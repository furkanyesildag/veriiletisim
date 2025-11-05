#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Soruları questions.js dosyasına eklemek için script"""

# Soru 21-110 için veriler
additional_questions = """
    {
        id: 21,
        question: "Analog sinyal için aşağıdakilerden hangisi doğrudur?",
        options: {
            a: "Sadece 0 ve 1 değerlerini alır",
            b: "Sınırlı sayıda değere sahiptir",
            c: "Belirli bir zaman aralığında sonsuz değere sahiptir",
            d: "Her zaman periyodiktir",
            e: "Sadece sayısal veri taşır"
        },
        correctAnswer: "c",
        explanation: "Analog sinyaller, belirli bir zaman aralığında sürekli değerler alır ve sonsuz sayıda değere sahip olabilir. Sayısal sinyaller ise sınırlı sayıda (ayrık) değere sahiptir."
    },
""".strip()

print("Additional questions template created")

