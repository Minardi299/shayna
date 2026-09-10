import { SITE } from "@/lib/site"

export function meta() {
  return [
    { title: "Privacy Policy — Shayna's Nails & Spa" },
    { name: "description", content: "Privacy policy for Shayna's Nails & Spa." },
  ]
}

function H({ children }: { children: string }) {
  return (
    <h2 className="mt-10 font-serif text-[clamp(22px,3vw,30px)] font-normal">
      {children}
    </h2>
  )
}

export default function PrivacyPage() {
  return (
    <section className="shell max-w-[760px] py-[clamp(56px,8vw,90px)]">
      <p className="text-[11px] tracking-[0.24em] text-brand uppercase">
        Legal
      </p>
      <h1 className="mt-4 font-serif text-[clamp(38px,7vw,64px)] leading-none font-light">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Effective Date: {SITE.privacyEffectiveDate}
      </p>

      <div className="mt-8 flex flex-col gap-4 leading-relaxed text-foreground/85">
        <p>
          At <strong>{SITE.name}</strong>, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard the
          information you provide when using our mobile application,{" "}
          <strong>{SITE.name}</strong>.
        </p>

        <H>1. Information We Collect</H>
        <h3 className="font-serif text-xl italic">1.1 Personal Information</h3>
        <p>
          When you use ABC Salon System at <strong>{SITE.name}</strong>, we may
          collect personal information that you voluntarily provide, such as your
          name, email address, phone number, and any other information you choose
          to share with us.
        </p>
        <h3 className="font-serif text-xl italic">1.2 Usage Information</h3>
        <p>
          We may also collect non-personal information about your use of the app,
          including device information, app usage data, and analytical
          information.
        </p>

        <H>2. Use of Collected Information</H>
        <p>
          We may use the personal information you provide to us for the following
          purposes:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-6">
          <li>
            To provide you with access to the features and functionalities of ABC
            Salon System at <strong>{SITE.name}</strong>.
          </li>
          <li>
            To communicate with you and respond to your inquiries, feedback, or
            support requests.
          </li>
          <li>To personalize your experience and improve the app's usability.</li>
          <li>
            To send you important updates, notifications, and marketing
            communications related to <strong>{SITE.name}</strong>, only if you
            have opted in to receive such communications.
          </li>
        </ul>

        <H>3. Data Security</H>
        <p>
          We take appropriate measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. We use
          industry-standard security technologies and procedures to safeguard
          your data.
        </p>

        <H>4. Data Retention</H>
        <p>
          We will retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>

        <H>5. Third-Party Services</H>
        <p>
          <strong>{SITE.name}</strong> may integrate with third-party services or
          include links to external websites or applications. This Privacy Policy
          does not cover the privacy practices of these third parties. We
          encourage you to review the privacy policies of any third-party services
          or websites you interact with.
        </p>

        <H>6. Children's Privacy</H>
        <p>
          <strong>{SITE.name}</strong> is not intended for use by individuals
          under the age of 13. We do not knowingly collect personal information
          from children. If you believe we have inadvertently collected personal
          information from a child, please contact us immediately.
        </p>

        <H>7. Changes to this Privacy Policy</H>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          effective when we post the revised Privacy Policy within the ABC Salon
          System app. We encourage you to review this Privacy Policy periodically.
        </p>

        <H>8. Your Choices</H>
        <ul className="flex list-disc flex-col gap-2 pl-6">
          <li>
            <strong>Access and Correction:</strong> You may request access to and
            correction of your personal information.
          </li>
          <li>
            <strong>Opt-Out:</strong> You may opt out of receiving marketing
            communications from us by following the unsubscribe instructions
            provided in those communications.
          </li>
          <li>
            <strong>Cookies:</strong> You can manage your cookie preferences
            through your browser settings. However, disabling cookies may affect
            your experience on our app.
          </li>
        </ul>

        <H>9. Sharing Policy</H>
        <p>
          All the above categories exclude text messaging opt-in data and
          consent; this information will not be shared with third parties.
        </p>
        <p>
          <strong>SMS Opt-In Sharing Policy:</strong> We will not share your SMS
          opt-in data with third parties for purposes unrelated to providing
          services. Your SMS opt-in status may be shared only with third parties
          that help us deliver messages, such as platform providers, phone
          companies, and messaging vendors.
        </p>

        <H>10. Contact Us</H>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy
          Policy or our data practices, please contact us at{" "}
          <a href={SITE.phoneHref} className="text-brand underline">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
