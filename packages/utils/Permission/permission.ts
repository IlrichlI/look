export type permissionType = string | string[]
export type permissionOptionsType = { and?: boolean; or?: boolean }

export default function usePermission(
  permission?: permissionType,
  options?: permissionOptionsType
): {
  hasPermission: boolean
} {
  let hasPermission = false
  const token = localStorage.getItem('rich-token')

  if (!token) {
    return { hasPermission: !permission }
  } else {
    const { permissions: permissionPatterns }: { permissions?: string[] } = jwtDecoder(token)
    if (Array.isArray(permission)) {
      hasPermission = permission.some(
        (p) => !!permissionPatterns?.some((patterns) => matchPermissionPattern(p, patterns))
      )
    } else if (permission) {
      hasPermission = !!permissionPatterns?.some((patterns) =>
        matchPermissionPattern(permission, patterns)
      )
    } else {
      hasPermission = true
    }
  }

  if (options !== undefined) {
    const { or, and } = options
    if (or !== undefined) {
      hasPermission = hasPermission || or
    }
    if (and !== undefined) {
      hasPermission = hasPermission && and
    }
  }

  return {
    hasPermission
  }
}

export function matchPermissionPattern(permission?: string, pattern?: string) {
  //CHECK IF PERMISSION AND PATTERN EXISTS
  if (!permission || !pattern) return false

  //SERIALIZE PERMISSION STRING
  let permissionString = permission.replace('/api', '').replace('/v1', '')
  if (permissionString.startsWith('/')) permissionString = permissionString.substring(1)
  permissionString = permissionString.replace(/[/]/g, '.')

  //INITIALIZE
  const permissionChar = permissionString.split('')
  const patternChars = pattern.split('')
  const permissionLength = permissionChar.length
  const patternLength = patternChars.length

  let permissionPointer = 0
  let patternPointer = 0

  //LOOP AROUND SERIALIZED PERMISSION AND PATTERN
  // eslint-disable-next-line no-constant-condition
  while (true) {
    //POINT TO CHARACTERS
    const per = permissionChar[permissionPointer]
    const pat = patternChars[patternPointer]

    //IF CHARACTERS ARE EQUAL
    if (per === pat) {
      permissionPointer++
      patternPointer++

      //IF SERIALIZED PERMISSION AND PATTERN ARE OVER
      if (permissionPointer >= permissionLength && patternPointer >= patternLength) return true
      //IF SERIALIZED PERMISSION OR PATTERN ARE OVER
      else if (permissionPointer >= permissionLength || patternPointer >= patternLength)
        return false
      continue
    }

    //IF PATTERN DOESN'T MATCH ALL
    if (pat !== '*') return false

    patternPointer += 2

    //GO TO NEXT WORD
    do {
      //IF THERE IS NO OTHER WORD
      if (permissionLength <= permissionPointer) return true
    } while (permissionChar[permissionPointer++] !== '.')
  }
}

export function jwtDecoder(token: string): any {
  return []
  // try {
  //   const base64Url = token.split('.')[1]
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  //   const jsonPayload = decodeURIComponent(
  //     window
  //       .atob(base64)
  //       .split('')
  //       .map(function (c) {
  //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  //       })
  //       .join('')
  //   )

  //   return JSON.parse(jsonPayload)
  // } catch {
  //   window.localStorage.removeItem('token')
  //   // window.location.reload()
  // }
}
