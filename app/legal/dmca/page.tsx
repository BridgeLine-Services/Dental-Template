import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = genMeta({
  title: "DMCA Takedown Policy",
  description: "Digital Millennium Copyright Act (DMCA) notice policy and takedown procedure for Bright Smile Dental.",
  path: "/legal/dmca",
});

export default function DMCAPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Legal", url: "/legal" },
            { name: "DMCA Policy", url: "/legal/dmca" },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 mt-6">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Copyright Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-2">
              DMCA Takedown Policy
            </h1>
            <p className="text-sm text-gray-500">
              Digital Millennium Copyright Act (17 U.S.C. § 512)
            </p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Copyright Infringement Policy</h2>
              <p>
                Bright Smile Dental respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (&quot;DMCA&quot;), Title 17, United States Code, Section 512(c), we will respond expeditiously to notices of alleged copyright infringement on brightsmiledental.com that are reported to our designated DMCA Agent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Filing a DMCA Notice</h2>
              <p className="mb-3">
                If you believe that material hosted on or accessible through our website infringes your copyright, please submit a written DMCA Notice containing the following information:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>Identification of the copyrighted work claimed to have been infringed, or a representative list if multiple works are covered.</li>
                <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access disabled, along with exact URLs.</li>
                <li>Information reasonably sufficient to permit us to contact you, such as address, telephone number, and email address.</li>
                <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.</li>
              </ol>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Designated DMCA Agent Contact</h2>
              <p className="text-sm"><strong>Designated Agent:</strong> Legal & Compliance Officer</p>
              <p className="text-sm"><strong>Entity:</strong> Bright Smile Dental</p>
              <p className="text-sm"><strong>Address:</strong> 1234 Wellness Boulevard, Suite 200, Springfield, CA 90210</p>
              <p className="text-sm"><strong>Email:</strong> dmca@brightsmiledental.com</p>
              <p className="text-sm"><strong>Phone:</strong> (555) 123-4567</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Counter-Notification Procedure</h2>
              <p>
                If material you posted was removed due to a DMCA notice and you believe this was due to mistake or misidentification, you may submit a written counter-notification to our Designated Agent meeting statutory DMCA requirements under 17 U.S.C. § 512(g)(3).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
