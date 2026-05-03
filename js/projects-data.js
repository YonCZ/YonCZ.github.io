const projects = [
{
    id: 95,
    title: "Minimalist Developer Portfolio",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Responsive Design"],
    description: "A clean, monochromatic personal portfolio developed as a final project for my school subject ITW.",
    details: "This project was built to demonstrate the power of core web technologies—HTML, CSS, and pure JavaScript—without the use of external frameworks. The design follows a strict monochromatic aesthetic with a focus on smooth transitions and a high-end 'minimalist' user experience. Key features include a custom-built dynamic project filtering system, responsive layouts for all device sizes, and optimized performance metrics. It serves as both a functional hub for my professional work and a testament to my ability to create polished, production-ready interfaces using fundamental web standards.",
    year: "Early 2026"
},
{
    id: 96,
    title: "AI Invoice WebApp",
    tags: ["LLM AI", "Python", "Astro", "Docker", "OCR", "Tailwind CSS"],
    description: "An automated administrative suite for intelligent invoice renaming and document matching using OCR and LLMs.",
    details: "I developed a dual-purpose web application designed to eliminate manual administrative overhead in invoice management. The first module intelligently renames invoice files by extracting document IDs and due dates; it features a hybrid extraction engine that switches between direct text parsing for digital PDFs and Tesseract-based OCR for scanned documents. To ensure 100% accuracy in varied formats, I integrated Google's Gemini LLM to interpret context and extract specific metadata from the raw text. The second module serves as an automated matcher, cross-referencing uploaded invoices against a master ledger and appending internal accounting IDs to filenames. The entire solution is containerized using Docker, features a secure session-based authentication system, and is deployed on a private VM. This architecture was built with scalability in mind, allowing the tool to expand from a single-client utility to a full multi-tenant SaaS application. Unfortunately this tool was custom-built for a client, as of now it does not have a public IP address or a live link for public access.",
    year: "Early 2026"
  },
  {
    id: 97,
    title: "AI Integration - OneCalend",
    tags: ["OpenAI API", "GPT Fine-tuning", "Python", "Data Engineering", "JSONL"],
    description: "Developed a specialized AI engine to generate creative and contextual event naming recommendations.",
    details: "I led the integration of AI features into the OneCalend platform, focusing on enhancing user experience through smart event naming. To achieve this, I curated and structured a custom dataset of thousands of event types and naming conventions. I then utilized OpenAI’s fine-tuning API to train a specialized GPT model, optimizing it to provide highly relevant, creative, and concise suggestions. This project involved extensive data engineering, prompt engineering, and iterative testing to ensure the AI maintained its creative focus within the calendar's constraints.",
    year: "Early 2025"
  },
  {
    id: 98,
    title: "Highschool Seminary Work",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "JupyterLab"],
    description: "Deep learning model development for automated binary image classification of reptiles.",
    details: "For my High School Professional Activity (SOČ), I developed a Convolutional Neural Network (CNN) in Python to distinguish between snakes and lizards. I managed the entire machine learning lifecycle: from curating and normalizing a custom dataset to training the model and analyzing performance metrics like precision and recall. My final model achieved over 93% accuracy on test data. This project gave me hands-on experience with neural network architecture, data preprocessing, and the optimization of AI algorithms.",
    year: "2023 — 2024",
    downloadFile: "download/Seminary_Work-Tadeáš_Přikryl.pdf",
    download: "Seminary Work (PDF)"
  },
  {
    id: 99,
    title: "Minecraft Modding & Private Servers",
    tags: ["Java", "Fabrcic", "Forge", "JSON"],
    description: "Custom Minecraft mods and community servers built for friends and entertaiment.",
    details: "I started modding Minecraft because my friends and I ran out of content to play. This sparked my passion for programing and led me to Java and object-oriented programming concepts. To share these modifications, I learned to deploy and manage private servers. This required me to implement security protocols and maintain a stable, bug-free environment for my community. This hands-on experience taught me the fundamentals of full-cycle product development and system administration.",
    year: "2019 — 2023"
  }
];