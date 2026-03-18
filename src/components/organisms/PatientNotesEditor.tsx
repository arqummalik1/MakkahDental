"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Textarea } from "@/components/atoms/Textarea";

export function PatientNotesEditor(props: { initialNotes: string }) {
  const [editing, setEditing] = useState(false);
  const [notes, setNotes] = useState(props.initialNotes);

  return (
    <div>
      <Textarea
        rows={5}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        readOnly={!editing}
        className={!editing ? "bg-[var(--color-surface)]" : undefined}
      />
      <div className="mt-3 flex gap-2">
        {editing ? (
          <Button
            variant="primary"
            onClick={() => {
              setEditing(false);
            }}
          >
            Save (Demo)
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setEditing(true)}>
            Edit Notes
          </Button>
        )}
        {editing ? (
          <Button
            variant="ghost"
            onClick={() => {
              setNotes(props.initialNotes);
              setEditing(false);
            }}
          >
            Cancel
          </Button>
        ) : null}
      </div>
    </div>
  );
}
