

export const generateImageURI = thumbnail => {
    return (`${thumbnail.path}.${thumbnail.extension}`).replace('http', 'https');
}
