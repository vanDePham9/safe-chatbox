// Normalize input without special charaters and input.
export const normalizeSpecialAndNumberInput = (input: string) => {
    const removeSpecialCharAndNumber =
        input
            .toLowerCase()
            .replace(/[@4]/g, 'a')
            .replace(/1/g, 'i')
            .replace(/3/g, 'e')
            .replace(/0/g, 'o')
            .replace(/[^a-z\s]/g, '');

    return removeSpecialCharAndNumber;
}