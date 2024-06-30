export const returnCapitalize = (text: string): string => {
  return text?.charAt(0)?.toUpperCase()+text?.slice(1).toLowerCase()
}

export const clipSentence = (str: string, wordAmout: number): string => {
    if(str.length > wordAmout) {
        str = str.substring(0, wordAmout) + '...'
    }
    return str;
};  