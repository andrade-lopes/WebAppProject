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

// Display the Create Project form
app.get("/new", (req, res) => {
    res.render("new");
});

// Save a new project
app.post("/new", async (req, res) => {
    try {

        await db.collection("projects").add({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            createdAt: new Date()
        });

        res.redirect("/");

    } catch (error) {
        console.error(error);
        res.status(500).send("Unable to create project");
    }
});

// Display the Edit Project form
app.get("/edit/:id", async (req, res) => {
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

        res.render("edit", {
            project: project
        });

    } catch (error) {
        console.error("Error loading project for editing:", error);
        res.status(500).send("Unable to load project");
    }
});

// Update an existing project
app.post("/edit/:id", async (req, res) => {
    try {
        const projectRef = db.collection("projects").doc(req.params.id);

        await projectRef.update({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            updatedAt: new Date()
        });

        res.redirect(`/project/${req.params.id}`);

    } catch (error) {
        console.error("Error updating project:", error);
        res.status(500).send("Unable to update project");
    }
});

// Delete an existing project
app.post("/delete/:id", async (req, res) => {
    try {
        const projectRef = db.collection("projects").doc(req.params.id);

        await projectRef.delete();

        res.redirect("/");

    } catch (error) {
        console.error("Error deleting project:", error);
        res.status(500).send("Unable to delete project");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});