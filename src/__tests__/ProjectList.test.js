import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";
import React from 'react';

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  // Add more project objects as needed
];

test("renders without errors", () => {
  render(<ProjectList projects={projects} />);
  const projectList = screen.getByTestId("project-list");
  expect(projectList).toBeInTheDocument();
});







