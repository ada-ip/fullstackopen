```mermaid
sequenceDiagram
participant browser
participant server

Note right of browser: The browser adds the new note to the notes list
Note right of browser: The browser rerenders the note list
browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note_spa
activate server
server -->> browser: 201 Created
deactivate server
```
