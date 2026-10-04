"use client";

import { useState, type FormEvent } from "react";
import { centreOptions, interests as interestOptions, waLink } from "@/lib/site";

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sentName, setSentName] = useState("");
  const [sentHref, setSentHref] = useState("");
  const [interests, setInterests] = useState(["Karate"]);

  function toggleInterest(label: string) {
    setInterests((cur) =>
      cur.includes(label) ? cur.filter((x) => x !== label) : cur.concat(label),
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => (data.get(key) || "").toString().trim();
    const name = field("name");
    const age = field("age");

    const details = [
      `Name: ${name}`,
      age && `Age: ${age}`,
      `Mobile: ${field("phone")}`,
      `Preferred centre: ${field("centre")}`,
      interests.length > 0 && `Interested in: ${interests.join(", ")}`,
    ].filter(Boolean);
    const href = waLink(
      "Hi Level Up MMA Academy, I'd like to book a free trial class.\n\n" + details.join("\n"),
    );

    window.open(href, "_blank", "noopener");
    setSentName(name.split(" ")[0] || "champ");
    setSentHref(href);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-done">
        <span className="form-done-title">Thank you, {sentName}!</span>
        <p>
          WhatsApp has opened with your details filled in. Tap send there so the message reaches
          us, and we will reply with batch timings the same day.
        </p>
        <a href={sentHref} target="_blank" rel="noopener" className="btn btn-gold form-done-wa">
          Open WhatsApp again
        </a>
        <button className="form-reset" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="lu-name">Student name</label>
        <input id="lu-name" name="name" required placeholder="Full name" />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="lu-age">Age</label>
          <input id="lu-age" name="age" inputMode="numeric" placeholder="e.g. 9" />
        </div>
        <div className="field">
          <label htmlFor="lu-phone">Mobile</label>
          <input id="lu-phone" name="phone" required inputMode="tel" placeholder="10-digit number" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="lu-centre">Preferred centre</label>
        <select id="lu-centre" name="centre">
          {centreOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="field field-chips">
        <span className="field-label">Interested in</span>
        <div className="chips">
          {interestOptions.map((label) => (
            <button
              key={label}
              type="button"
              className="chip"
              aria-pressed={interests.includes(label)}
              onClick={() => toggleInterest(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <button type="submit" className="btn btn-gold form-submit">
        Send on WhatsApp
      </button>
      <p className="form-note">
        This opens WhatsApp with your details ready to send. Nothing is shared until you tap send.
      </p>
    </form>
  );
}
