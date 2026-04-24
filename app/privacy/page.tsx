import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Harmonics24",
  description: "Privacy Policy for Harmonics24 - Solving human scale problems",
};

const sections = [
  { id: "introduction", number: "1", title: "Introduction" },
  { id: "scope", number: "2", title: "Scope" },
  { id: "data-collection", number: "3", title: "Personal Data We Collect" },
  { id: "purposes", number: "4", title: "Purposes and Legal Basis" },
  { id: "sensitive", number: "5", title: "Sensitive Personal Data" },
  { id: "sharing", number: "6", title: "Data Sharing and Disclosures" },
  { id: "retention", number: "7", title: "Data Retention" },
  { id: "rights", number: "8", title: "Your Rights" },
  { id: "security", number: "9", title: "Data Security" },
  { id: "cookies", number: "10", title: "Cookies and Tracking" },
  { id: "children", number: "11", title: "Children's Privacy" },
  { id: "changes", number: "12", title: "Changes to This Policy" },
  { id: "contact", number: "13", title: "Contact Information" },
  { id: "force-majeure", number: "14", title: "Force Majeure" },
];

const dataCategories = [
  { category: "Identity Data", examples: "Name, title, date of birth, signature" },
  { category: "Contact Data", examples: "Email address, postal address, phone number" },
  { category: "Financial Data", examples: "Billing information, payment card details, invoice history" },
  { category: "Case-Related Data", examples: "Matter description, legal documents, evidence, correspondence" },
  { category: "Employment Data", examples: "CV, employment history, professional licenses, bar admissions" },
  { category: "Communication Preferences", examples: "Opt-in preferences, communication history" },
];

const purposes = [
  { purpose: "Providing legal services", gdpr: "Contract performance (Art. 6(1)(b))", ccpa: "Service delivery" },
  { purpose: "Client onboarding and identification", gdpr: "Legal obligation (Art. 6(1)(c))", ccpa: "Transaction completion" },
  { purpose: "Billing and payment processing", gdpr: "Contract performance (Art. 6(1)(b))", ccpa: "Transaction completion" },
  { purpose: "Communicating about matters", gdpr: "Legitimate interests (Art. 6(1)(f))", ccpa: "Service provision" },
  { purpose: "Marketing (where permitted)", gdpr: "Consent (Art. 6(1)(a))", ccpa: "Right to opt-out" },
  { purpose: "Complying with legal obligations", gdpr: "Legal obligation (Art. 6(1)(c))", ccpa: "Legal compliance" },
  { purpose: "Fraud prevention and security", gdpr: "Legitimate interests (Art. 6(1)(f))", ccpa: "Security" },
];

const disclosures = [
  { recipient: "Courts and Opposing Counsel", purpose: "Litigation and dispute resolution" },
  { recipient: "Government Authorities", purpose: "Regulatory compliance and legal obligations" },
  { recipient: "Service Providers", purpose: "Billing, technology, and administrative support" },
  { recipient: "Professional Advisors", purpose: "Accounting, auditing, and legal advice" },
  { recipient: "Successor Entities", purpose: "Mergers, acquisitions, or firm transitions" },
];

const retention = [
  { dataType: "Client matter files", period: "7 years after matter conclusion" },
  { dataType: "Billing records", period: "7 years" },
  { dataType: "Marketing data", period: "Until consent withdrawn + 2 years" },
  { dataType: "Job applications (unsuccessful)", period: "6 months" },
  { dataType: "Website logs", period: "1 year" },
];

const cookies = [
  { type: "Essential", purpose: "Core functionality, security", duration: "Session" },
  { type: "Analytics", purpose: "Website usage statistics", duration: "2 years" },
  { type: "Marketing", purpose: "Ad targeting (with consent)", duration: "90 days" },
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <header
        style={{
          background: "var(--gradient-harmonic)",
          padding: "var(--space-12) 0",
          marginBottom: "var(--space-12)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "white",
              opacity: 0.9,
            }}
          >
            Harmonics24
          </Link>
          <span style={{ fontSize: "var(--text-small)", color: "white", opacity: 0.8 }}>
            Privacy Policy
          </span>
        </div>
      </header>

      <div className="container container--main">
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h1
            style={{
              fontSize: "var(--text-h1)",
              fontWeight: "var(--weight-bold)",
              marginBottom: "var(--space-4)",
              color: "var(--color-obsidian)",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "var(--text-small)",
              color: "var(--color-steel)",
            }}
          >
            Effective Date: April 24, 2026
          </p>
        </div>

        {/* Content */}
        <main
          style={{
            background: "var(--color-white)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "var(--space-10)",
            marginBottom: "var(--space-12)",
          }}
        >
          {/* Table of Contents */}
          <nav
            style={{
              background: "#ebf8ff",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-6)",
              marginBottom: "var(--space-10)",
            }}
          >
            <h3
              style={{
                fontSize: "var(--text-small)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--color-steel)",
                marginBottom: "var(--space-4)",
                marginTop: 0,
              }}
            >
              Contents
            </h3>
            <ol
              style={{
                margin: 0,
                paddingLeft: "var(--space-5)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "var(--space-2)",
              }}
            >
              {sections.map((section) => (
                <li key={section.id} style={{ fontSize: "var(--text-small)" }}>
                  <a
                    href={`#${section.id}`}
                    style={{
                      color: "var(--color-frequency)",
                      textDecoration: "none",
                    }}
                  >
                    {section.number}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <section id="introduction" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              1. Introduction
            </h2>
            <p>
              This Privacy Policy (&ldquo;Policy&rdquo;) describes how Harmonics24 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards information about individuals (&ldquo;you&rdquo; or &ldquo;your&rdquo;) in connection with our legal services, website, and related communications. We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant privacy regulations.
            </p>
            <p>
              By accessing our website or using our services, you acknowledge that you have read and understood this Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="scope" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              2. Scope
            </h2>
            <p>This Policy applies to:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Visitors of our website</li>
              <li>Clients and prospective clients</li>
              <li>Opposing parties and counsel (in the context of legal proceedings)</li>
              <li>Job applicants and employees</li>
              <li>Any other individuals whose personal data we process</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="data-collection" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              3. Personal Data We Collect
            </h2>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              3.1 Information You Provide Directly
            </h3>
            <p>We may collect the following categories of personal data you provide to us:</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-small)" }}>
              <thead>
                <tr style={{ backgroundColor: "#ebf8ff" }}>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Category</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Examples</th>
                </tr>
              </thead>
              <tbody>
                {dataCategories.map((item, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent" }}>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}><strong>{item.category}</strong></td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              3.2 Information Collected Automatically
            </h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>Cookies and tracking technologies (see Section 10)</li>
            </ul>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              3.3 Information from Third Parties
            </h3>
            <p>We may receive personal data from:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Referral sources and professional contacts</li>
              <li>Publicly available sources (court records, bar directories, corporate registries)</li>
              <li>Service providers and vendors</li>
              <li>Business partners (with your consent where required)</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="purposes" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              4. Purposes and Legal Basis for Processing
            </h2>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              4.1 We Process Personal Data For:
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-small)" }}>
              <thead>
                <tr style={{ backgroundColor: "#ebf8ff" }}>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>GDPR Legal Basis</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>CCPA Basis</th>
                </tr>
              </thead>
              <tbody>
                {purposes.map((item, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent" }}>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}><strong>{item.purpose}</strong></td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.gdpr}</td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.ccpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              4.2 Legitimate Interests
            </h3>
            <p>Where we rely on legitimate interests, we balance our interests against your rights and freedoms. You may object to this processing at any time (see Section 8).</p>
          </section>

          {/* Section 5 */}
          <section id="sensitive" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              5. Sensitive Personal Data
            </h2>
            <p>We may process sensitive personal data (special categories under GDPR, &ldquo;sensitive personal information&rdquo; under CCPA) only when:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Necessary for the establishment, exercise, or defense of legal claims</li>
              <li>You have explicitly consented</li>
              <li>Required by applicable law</li>
              <li>Necessary to protect your vital interests</li>
            </ul>
            <p>Sensitive data may include: Social Security Numbers, financial account information, health information disclosed in legal matters, and other data explicitly protected by law.</p>
          </section>

          {/* Section 6 */}
          <section id="sharing" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              6. Data Sharing and Disclosures
            </h2>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              6.1 We Do Not Sell Your Personal Data
            </h3>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              6.2 We May Disclose Data To:
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-small)" }}>
              <thead>
                <tr style={{ backgroundColor: "#ebf8ff" }}>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Recipient</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {disclosures.map((item, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent" }}>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}><strong>{item.recipient}</strong></td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              6.3 International Transfers
            </h3>
            <p>If we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards through:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Binding Corporate Rules (where applicable)</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="retention" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              7. Data Retention
            </h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-small)" }}>
              <thead>
                <tr style={{ backgroundColor: "#ebf8ff" }}>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Data Type</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {retention.map((item, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent" }}>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.dataType}</td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Section 8 */}
          <section id="rights" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              8. Your Rights
            </h2>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              8.1 General Rights
            </h3>
            <p>You may have the following rights regarding your personal data:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li><strong>Access</strong> — Request a copy of your personal data</li>
              <li><strong>Rectification</strong> — Request correction of inaccurate data</li>
              <li><strong>Erasure</strong> — Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li><strong>Restriction</strong> — Request limited processing</li>
              <li><strong>Portability</strong> — Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection</strong> — Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent</strong> — Where processing is based on consent</li>
            </ul>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              8.2 Additional Rights Under CCPA
            </h3>
            <p>California residents have the right to:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Know what personal information is collected about them</li>
              <li>Know whether their data is sold or disclosed (and to whom)</li>
              <li>Say no to the sale of personal information</li>
              <li>Not be discriminated against for exercising their privacy rights</li>
            </ul>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              8.3 Additional Rights Under GDPR
            </h3>
            <p>EEA/UK residents have the right to:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Lodge a complaint with a supervisory authority</li>
              <li>Receive a copy of SCCs upon request</li>
              <li>Request human review of automated decisions</li>
            </ul>

            <div
              style={{
                background: "#ebf8ff",
                borderLeft: "4px solid var(--color-frequency)",
                padding: "var(--space-6)",
                marginTop: "var(--space-6)",
                borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
              }}
            >
              <p style={{ fontWeight: "var(--weight-semibold)", marginBottom: "var(--space-3)" }}>How to Exercise Your Rights</p>
              <p style={{ marginBottom: "var(--space-2)" }}>Email: <a href="mailto:privacy@lawfirm.com" style={{ color: "var(--color-frequency)" }}>privacy@lawfirm.com</a></p>
              <p style={{ marginBottom: "var(--space-2)" }}>Mail: Privacy Officer, 123 Legal Street, Suite 500, New York, NY 10001</p>
              <p style={{ marginBottom: "var(--space-2)" }}>Phone: (212) 555-0100</p>
              <p style={{ marginBottom: 0, fontSize: "var(--text-small)", color: "var(--color-steel)" }}>We will respond within 30 days. For CCPA requests, we will verify your identity before processing.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="security" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              9. Data Security
            </h2>
            <p>We implement appropriate technical and organizational measures to protect personal data, including:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and least-privilege principles</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>In the event of a data breach affecting your rights, we will notify you and relevant authorities within 72 hours as required by GDPR Article 33.</p>
          </section>

          {/* Section 10 */}
          <section id="cookies" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              10. Cookies and Tracking
            </h2>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              10.1 Types of Cookies We Use
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-small)" }}>
              <thead>
                <tr style={{ backgroundColor: "#ebf8ff" }}>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Type</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "var(--space-3)", border: "1px solid var(--color-mist)", fontWeight: "var(--weight-semibold)", color: "var(--color-obsidian)" }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((item, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent" }}>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}><strong>{item.type}</strong></td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.purpose}</td>
                    <td style={{ padding: "var(--space-3)", border: "1px solid var(--color-mist)" }}>{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-semibold)", color: "var(--color-graphite)", marginTop: "var(--space-6)", marginBottom: "var(--space-3)" }}>
              10.2 Managing Cookies
            </h3>
            <p>You may manage your cookie preferences through our Cookie Consent Tool or your browser settings. Disabling non-essential cookies may affect website functionality.</p>
          </section>

          {/* Section 11 */}
          <section id="children" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              11. Children&apos;s Privacy
            </h2>
            <p>Our services are not directed to individuals under 18 (or 16 in the EEA). We do not knowingly collect personal data from children. If you believe we have collected such data, contact us immediately.</p>
          </section>

          {/* Section 12 */}
          <section id="changes" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              12. Changes to This Policy
            </h2>
            <p>We may update this Policy periodically. The &ldquo;Effective Date&rdquo; at the top indicates the most recent revision. For material changes, we will:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>Provide prominent notice on our website</li>
              <li>Request renewed consent where required</li>
              <li>Email registered users of changes</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section id="contact" style={{ marginBottom: "var(--space-10)", paddingBottom: "var(--space-10)", borderBottom: "1px solid var(--color-mist)" }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              13. Contact Information
            </h2>
            <p>For privacy-related inquiries or to exercise your rights:</p>

            <div
              style={{
                background: "#ebf8ff",
                borderLeft: "4px solid var(--color-frequency)",
                padding: "var(--space-6)",
                marginTop: "var(--space-6)",
                borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
              }}
            >
              <p style={{ fontWeight: "var(--weight-semibold)", marginBottom: "var(--space-3)" }}>Privacy Officer</p>
              <p style={{ marginBottom: "var(--space-2)" }}>Email: <a href="mailto:privacy@lawfirm.com" style={{ color: "var(--color-frequency)" }}>privacy@lawfirm.com</a></p>
              <p style={{ marginBottom: "var(--space-2)" }}>Phone: (212) 555-0100</p>
              <p style={{ marginBottom: 0 }}>Address: 123 Legal Street, Suite 500<br />New York, NY 10001</p>
            </div>

            <p style={{ marginTop: "var(--space-6)" }}>For EU/UK supervisory authorities, contact details are available at:</p>
            <ul style={{ marginLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li>EU: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-frequency)" }}>edpb.europa.eu/about-edpb/about-edpb/members_en</a></li>
              <li>UK: <a href="https://ico.org.uk/global/contact-us/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-frequency)" }}>ico.org.uk/global/contact-us/</a></li>
            </ul>
          </section>

          {/* Section 14 */}
          <section id="force-majeure" style={{ marginBottom: 0, paddingBottom: 0 }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-obsidian)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "2px solid var(--color-frequency)",
                display: "inline-block",
              }}
            >
              14. Force Majeure
            </h2>
            <p>We shall not be liable for any failure to perform our obligations where such failure results from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemic, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.</p>
          </section>

          {/* Disclaimer */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #f59e0b",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-sm)",
              fontSize: "var(--text-small)",
              color: "#92400e",
              marginTop: "var(--space-10)",
            }}
          >
            <strong>Disclaimer:</strong> This Privacy Policy is provided for informational purposes and does not constitute legal advice. Consult with qualified legal counsel regarding specific privacy compliance obligations.
          </div>
        </main>

        {/* Footer */}
        <footer style={{ textAlign: "center", padding: "var(--space-8) 0", color: "var(--color-steel)", fontSize: "var(--text-small)" }}>
          <p>&copy; {new Date().getFullYear()} Harmonics24. All rights reserved.</p>
          <p>Version 1.0 &nbsp;|&nbsp; Next Review: April 24, 2027</p>
        </footer>
      </div>
    </div>
  );
}
