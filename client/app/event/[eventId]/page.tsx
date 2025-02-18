import { SearchParams } from "next/dist/server/request/search-params"

interface ComponentProps {
  params: Promise<SearchParams>
}

export default async function Page({ params }: ComponentProps) {

  const { eventId } = await params

  try {
    const response = await fetch(`http://localhost:8080/getEvent/${eventId}`, {
      credentials: 'include'
    })

    if (!response.ok) {
      const resData = await response.json()
      const error = new Error(resData.message)
      throw error
    }

    const resData = await response.json()

    return (
      <div>
        <p>Will be the detail page of an event!</p>
      </div>
    )

  } catch (err: unknown) {
    const error = err as { message: string }
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }
}