export default function useSerializeURLs(baseURL: string, URLs:{ [key in string]: string }, otherURLs?: { [key in string]: string}) {

  let finalURLs: { [key in string]: string } = {
    baseURL
  }

  Object.keys(URLs).forEach(key => {
    finalURLs[key] = baseURL + URLs[key]
  })

  if(otherURLs) {
    finalURLs = {
      ...finalURLs,
      ...otherURLs
    }
  }

  return finalURLs
}