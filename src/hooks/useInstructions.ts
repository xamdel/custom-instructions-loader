import { useState, useEffect } from "react";
import { Instruction } from "../types";

const useInstructions = () => {
  const [instructions, setInstructions] = useState<Instruction[]>([]);

  useEffect(() => {
    const savedInstructions: Instruction[] = JSON.parse(
      localStorage.getItem("instructions") || "[]"
    );
    setInstructions(savedInstructions);
  }, []);

  const addInstruction = (newInstruction: Instruction) => {
    const updatedInstructions = [...instructions, newInstruction];
    localStorage.setItem("instructions", JSON.stringify(updatedInstructions));
    setInstructions(updatedInstructions);
  };

  const deleteInstruction = (id: string) => {
    const updatedInstructions = instructions.filter(
      (instruction) => instruction.id !== id
    );
    localStorage.setItem("instructions", JSON.stringify(updatedInstructions));
    setInstructions(updatedInstructions);
  };

  const updateInstruction = (updatedInstruction: Instruction) => {
    const index = instructions.findIndex(
      (inst) => inst.id === updatedInstruction.id
    );
    if (index !== -1) {
      const updatedInstructions = [...instructions];
      updatedInstructions[index] = updatedInstruction;
      localStorage.setItem("instructions", JSON.stringify(updatedInstructions));
      setInstructions(updatedInstructions);
    }
  };

  return {
    instructions,
    addInstruction,
    deleteInstruction,
    updateInstruction,
  };
};

export default useInstructions;