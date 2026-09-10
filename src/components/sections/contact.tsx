import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const line =
  "rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus-visible:border-brand focus-visible:ring-0"
const labelCls = "text-[11px] uppercase tracking-[0.22em] text-muted-foreground"

type Errors = { name?: string; email?: string; message?: string }

export function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const next: Errors = {}
    if (!name) next.name = "Please tell us your name."
    if (!email) next.email = "Please add an email address."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email address does not look right."
    if (!message) next.message = "Please write a short message."
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <section
      id="contact"
      className="shell grid items-start gap-[clamp(38px,6vw,72px)] py-[clamp(60px,9vw,100px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]"
    >
      <div>
        <h2
          data-reveal
          className="mb-5 font-serif text-[clamp(34px,7vw,58px)] leading-[1.03] font-light tracking-[-0.015em]"
        >
          Send us a message
        </h2>
        <p className="max-w-[400px] text-base leading-[1.7] font-light text-muted-foreground [text-wrap:pretty]">
          Questions about a service, a design you saw, or booking a group? Write
          to us and we will get back to you.
        </p>
      </div>

      <div>
        {sent ? (
          <div className="rounded-2xl border border-border bg-card p-9">
            <div className="mb-4 font-script text-3xl">Thank you</div>
            <p className="mb-6 text-base leading-[1.7] font-light text-muted-foreground">
              Your message is on its way to the studio. We will reply to the
              email you gave us — usually within a day.
            </p>
            <Button
              variant="link"
              className="h-auto px-0 text-[12px] tracking-[0.2em] uppercase"
              onClick={() => setSent(false)}
            >
              Send another
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <FieldGroup>
              <Field data-invalid={errors.name ? true : undefined}>
                <FieldLabel htmlFor="name" className={labelCls}>
                  Name
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={errors.name ? true : undefined}
                  className={line}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>

              <Field data-invalid={errors.email ? true : undefined}>
                <FieldLabel htmlFor="email" className={labelCls}>
                  Email address
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  aria-invalid={errors.email ? true : undefined}
                  className={line}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>

              <Field data-invalid={errors.message ? true : undefined}>
                <FieldLabel htmlFor="message" className={labelCls}>
                  Message
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  aria-invalid={errors.message ? true : undefined}
                  className={line}
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </Field>

              <Button
                type="submit"
                className="h-auto w-fit rounded-full border border-primary px-10 py-[18px] text-[12px] font-normal tracking-[0.22em] uppercase hover:bg-primary-foreground hover:text-primary"
              >
                Send message
              </Button>
            </FieldGroup>
          </form>
        )}
      </div>
    </section>
  )
}
