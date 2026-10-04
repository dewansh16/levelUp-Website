import Image from "next/image";
import { Fragment } from "react";
import Header from "@/components/Header";
import TrialForm from "@/components/TrialForm";
import {
  centres,
  coaches,
  disciplinePhotos,
  disciplines,
  gallery,
  pathway,
  phoneNumber,
  results,
  stats,
  telHref,
  values,
  waHref,
  whatsappNumber,
} from "@/lib/site";

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden}>
      {values.map((v) => (
        <Fragment key={v}>
          <span>{v}</span>
          <span className="dot">◆</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      <Header />

      <section id="top" className="hero">
        <div className="hero-bg">
          <Image
            src="/photos/a01.webp"
            alt="Students seated in rows on the mat with their coach at the front"
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-body">
          <div className="hero-copy">
            <span className="eyebrow">Korba, Chhattisgarh · 3 training centres</span>
            <h1>
              TRAIN HARD.
              <br />
              STAY HUMBLE.
              <br />
              <span>LEVEL UP.</span>
            </h1>
            <p>
              Mixed Martial Arts, Karate, Taekwondo, Boxing, Judo, Ju-Jitsu and self-defence — for
              children, teenagers and adults. Coaching that builds discipline first, medals after.
            </p>
            <div className="hero-actions">
              <a href="#trial" className="btn btn-gold">
                Book a free trial class
              </a>
              <a href={waHref} target="_blank" rel="noopener" className="btn btn-outline">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                {s.note && <span className="stat-note">{s.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <section id="disciplines" className="section section-dark">
        <div className="container section-inner">
          <div className="section-top">
            <div className="section-head">
              <span className="eyebrow">01 — What we teach</span>
              <h2 className="h2">One academy, seven martial arts</h2>
              <p>
                Level Up is more than an MMA gym. Each discipline runs with its own rules, its own
                gradings and its own competition circuit — from the beginner batch through to the
                state and national squads.
              </p>
            </div>
            <a href="#trial" className="link-underline link-gold">
              Not sure which one? Ask us
            </a>
          </div>
          <div className="discipline-grid">
            {disciplines.map((d) => (
              <div key={d.num} className="discipline">
                <span className="discipline-num">{d.num}</span>
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
                <span className="discipline-who">{d.who}</span>
              </div>
            ))}
          </div>
          <div className="photo-row">
            {disciplinePhotos.map((p) => (
              <figure key={p.src}>
                <div className="frame">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 860px) 400px, 100vw"
                    className="cover"
                    style={{ objectPosition: p.position }}
                  />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pathway" className="section section-light">
        <div className="container section-inner pathway-inner">
          <div className="section-head section-head-wide">
            <span className="eyebrow">02 — The pathway</span>
            <h2 className="h2">From beginner batch to the national mat</h2>
            <p>
              Not every child comes here to compete, and that is fine. But for those who want to go
              further the route is clear, and the academy sends squads to district, state and
              national events every season.
            </p>
          </div>
          <div className="pathway-grid">
            {pathway.map((p) => (
              <div key={p.step} className="step">
                <span className="step-num">{p.step}</span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
            ))}
          </div>
          <div className="results-grid">
            {results.map((r) => (
              <div key={r.label} className={r.highlight ? "result result-highlight" : "result"}>
                <span className="result-label">{r.label}</span>
                <span className="result-figure">{r.figure}</span>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <div className="press-grid">
            <figure className="press-main">
              <div className="frame">
                <Image
                  src="/photos/a04.webp"
                  alt="Academy students holding certificates and medals after a grading"
                  fill
                  sizes="(min-width: 760px) 800px, 100vw"
                  className="cover"
                />
              </div>
              <figcaption>Grading and medal day at the academy.</figcaption>
            </figure>
            <figure className="press-card">
              <span className="eyebrow">In the press</span>
              <div className="frame">
                <Image
                  src="/photos/b06.webp"
                  alt="Newspaper clipping about the academy's self-defence training for young women"
                  fill
                  sizes="(min-width: 760px) 400px, 100vw"
                  className="cover"
                />
              </div>
              <figcaption>
                Local coverage of the academy&apos;s self-defence training for young women in the
                district.
              </figcaption>
            </figure>
          </div>
          <p className="fineprint">
            Competition results as reported in regional press coverage of the academy. Full result
            sheets available on request.
          </p>
        </div>
      </section>

      <section id="coaches" className="section section-dark">
        <div className="container section-inner">
          <div className="section-head section-head-wide">
            <span className="eyebrow">03 — The team</span>
            <h2 className="h2">Coaches on the mat with you</h2>
          </div>
          <div className="coach-grid">
            {coaches.map((c) => (
              <div key={c.name} className="coach">
                <div className="coach-photo">
                  {c.photo ? (
                    <Image
                      src={c.photo}
                      alt={c.name}
                      fill
                      sizes="(min-width: 860px) 280px, 100vw"
                      className="cover"
                    />
                  ) : (
                    <span>Portrait — {c.name}</span>
                  )}
                </div>
                <div className="coach-info">
                  <h3>{c.name}</h3>
                  <span className="coach-role">{c.role}</span>
                  <p>{c.note}</p>
                  {c.ig && (
                    <a
                      href={`https://www.instagram.com/${c.ig}/`}
                      target="_blank"
                      rel="noopener"
                      className="coach-ig"
                    >
                      Instagram @{c.ig}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="centres" className="section section-light">
        <div className="container section-inner">
          <div className="section-top">
            <div className="section-head">
              <span className="eyebrow">04 — Where we train</span>
              <h2 className="h2">Three centres across Korba</h2>
            </div>
            <a href={telHref} className="link-underline link-ink">
              Call {phoneNumber}
            </a>
          </div>
          <div className="centre-grid">
            {centres.map((c) => (
              <div key={c.name} className="centre">
                <div className="centre-photo">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    sizes="(min-width: 860px) 400px, 100vw"
                    className="cover"
                  />
                </div>
                <div className="centre-body">
                  <h3>{c.name}</h3>
                  <p className="centre-address">{c.address}</p>
                  <p className="centre-disciplines">{c.disciplines}</p>
                  <div className="centre-actions">
                    <a href={c.mapHref} target="_blank" rel="noopener" className="centre-map">
                      Map
                    </a>
                    <a href={waHref} target="_blank" rel="noopener" className="centre-ask">
                      Ask for timings
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="callout">
            Batch timings differ by centre and by discipline, and they change with the season.
            Message us on WhatsApp for the current schedule and we will send it straight away. Fees
            are shared on enquiry.
          </p>
        </div>
      </section>

      <section id="gallery" className="section section-dark gallery">
        <div className="container section-inner gallery-inner">
          <div className="section-head">
            <span className="eyebrow">05 — Inside the academy</span>
            <h2 className="h2">Mat, medals, matches</h2>
            <p>Training sessions, gradings, celebrations and events from our three centres.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <div key={g.src} className={g.span ? `tile tile-${g.span}` : "tile"}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes={g.span === "big" ? "600px" : g.span === "wide" ? "420px" : "200px"}
                  className="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trial" className="section trial">
        <div className="container trial-grid">
          <div className="trial-copy">
            <span className="eyebrow">06 — Start here</span>
            <h2>
              FIRST CLASS
              <br />
              IS FREE.
            </h2>
            <p>
              Fill in the form and we will send your nearest centre, batch timings and fees over
              WhatsApp. All you need for a trial class is comfortable clothes.
            </p>
            <div className="trial-contact">
              <a href={telHref}>Call {phoneNumber}</a>
              <a href={waHref} target="_blank" rel="noopener">
                WhatsApp {whatsappNumber}
              </a>
            </div>
          </div>
          <div className="trial-panel">
            <TrialForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <span className="logo logo-lg">
                <Image src="/logo.jpeg" alt="Level Up MMA Academy" width={56} height={56} />
              </span>
              <p>Level Up Mixed Martial Arts Academy &amp; Fitness Studio — Korba, Chhattisgarh.</p>
            </div>
            <div className="footer-col">
              <span className="footer-title">Explore</span>
              <a href="#disciplines">Disciplines</a>
              <a href="#pathway">Results &amp; pathway</a>
              <a href="#coaches">Coaches</a>
              <a href="#centres">Centres</a>
            </div>
            <div className="footer-col">
              <span className="footer-title">Contact</span>
              <a href={telHref}>{phoneNumber}</a>
              <a href={waHref} target="_blank" rel="noopener">
                WhatsApp enquiry
              </a>
              <a href="#trial">Book a free trial</a>
            </div>
            <div className="footer-col">
              <span className="footer-title">Centres</span>
              {centres.map((c) => (
                <span key={c.name}>{c.name}</span>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Level Up MMA Academy, Korba.</span>
            <span>Stay fit, stay active, stay connected to sport.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
