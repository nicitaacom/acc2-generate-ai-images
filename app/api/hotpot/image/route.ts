import axios, { AxiosResponse } from "axios"
import { NextResponse } from "next/server"

export type TAPIHotpotImage = {
  promt: string
  styleId?: number
}

export interface IResponse {
  customerEmail: string | null
}

export type TAPIHotpotImageResponse = AxiosResponse<IResponse>

export async function POST(req: Request) {
  const { promt, styleId } = (await req.json()) as TAPIHotpotImage

  // Construct the request body
  const requestBody = {
    inputText: promt,
    styleId: styleId ?? 146, // https://hotpot.ai/art-maker/style-catalog
  }
  try {
    // Make the request using axios
    const response = await axios.post("https://api.hotpot.ai/make-art", requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HOTPOT_AI_KEY}`, // Replace API_KEY_HERE with your actual API key
      },
    })
    return NextResponse.json(response.data)
  } catch (error) {
    if (error instanceof Error) {
      console.log(34, "ERROR_GENERATING_IMAGE - ", error.message)
    }
    console.log(36, "ERROR_GENERATING_IMAGE - ", error)
  }
}
