import express from "express";
import { db } from "./config/firebase-admin.js";

const app = express();
const PORT = 3000;

// Configure EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static("public"));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", async (req, res) => {
    try {
        const snapshot = await db.collection("projects").get();

        const projects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        res.render("index", {
            title: "Cloud Database Web App",
            projects: projects
        });

    } catch (error) {
        console.error("Error loading projects:", error);
        res.status(500).send("Unable to load projects");
    }
});

// Project details page
app.get("/project/:id", async (req, res) => {
    try {
        const projectRef = db.collection("projects").doc(req.params.id);
        const projectSnapshot = await projectRef.get();

        if (!projectSnapshot.exists) {
            return res.status(404).send("Project not found");
        }

        const project = {
            id: projectSnapshot.id,
            ...projectSnapshot.data()
        };

        res.render("project", {
            title: "Project Details",
            project: project
        });

    } catch (error) {
        console.error("Error loading project:", error);
        res.status(500).send("Unable to load project");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});