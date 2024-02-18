"use client"

import { TAPIHotpotImage } from "@/api/hotpot/image/route"
import axios from "axios"

export function Button() {
  async function generateImage() {
    const response = await axios.post("/api/hotpot/image", {
      promt: "generate beautiful gril with long hair and blue eyes",
    } as TAPIHotpotImage)
    console.log(6, "response - ", response)
  }

  return (
    <button className="px-4 py-2 bg-success text-black rounded" onClick={generateImage}>
      Generate image
    </button>
  )
}
