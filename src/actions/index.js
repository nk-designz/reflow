export const addNote = (note) => {
    return {
        type: 'ADDNOTE',
        note: note
    }
}

export const flushNotes = () => {
    return {
        type: 'FLUSHNOTES'
    }
}