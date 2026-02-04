"use client";

import Banner from "@/components/Banner";
import Link from "next/link";

// Server Component by default (no "use client")
export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen ">
      {/* Reusable Banner */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Parish Announcements"
        moreText="Stay informed with the latest updates from Stella Maris Parish"
      />

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements List */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-blend-darkenblue rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Sunday Mass & Parish Updates
                  </h3>
                  <span className="text-sm text-gray-500">Dec 15, 2025</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  All parishioners are reminded that Sunday Masses hold as
                  usual. There will also be a short meeting for all ministry
                  leaders after the 10:30 AM Mass. Kindly be punctual.
                </p>

                <Link href="#" className="text- font-medium hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Quick Notices
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>📌 Confession: Fridays by 5:00 PM</li>
                <li>📌 Catechism: Saturdays by 9:00 AM</li>
                <li>📌 Choir Practice: Thursdays by 6:00 PM</li>
                <li>📌 Parish Council Meeting: Last Sunday of the month</li>
              </ul>
            </div>

            <div className="bg-/5 border border-/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text- mb-2">
                Have an Announcement?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Kindly submit announcements to the parish office at least one
                week before the intended publication date.
              </p>
              <Link
                href="/contact"
                className="inline-block bg- text-white px-4 py-2 rounded-xl text-sm hover:opacity-90"
              >
                Contact Parish Office
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
