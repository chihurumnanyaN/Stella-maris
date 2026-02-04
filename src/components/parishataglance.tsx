import React from "react";

export default function ParishAtAGlance() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#D4A73B]">
          Stella Maris Parish — At a Glance
        </h1>
        <p className="mt-2 text-gray-600">
          Key facts and essential information about Stella Maris Catholic
          Church, Abayi–Aba
        </p>
      </header>

      <div className="space-y-10">
        {/* Basic Identity */}
        <Section title="Parish Identity">
          <Item
            label="Parish Name"
            value="Stella Maris Catholic Church, Abayi–Aba"
          />
          <Item label="Diocese" value="Catholic Diocese of Aba" />
          <Item
            label="Patroness"
            value="Blessed Virgin Mary, Star of the Sea"
          />
          <Item
            label="Location"
            value="Abayi–Aba, Osisioma Ngwa LGA, Abia State, Nigeria"
          />
        </Section>

        {/* Key Dates */}
        <Section title="Key Dates & Milestones">
          <Item label="Seed Planted" value="1979" />
          <Item label="First Mass on Present Site" value="1st May, 1988" />
          <Item label="Formal Parish Inauguration" value="2nd August, 2003" />
          <Item label="Silver Jubilee" value="13th February, 2022" />
          <Item
            label="Parish Dedication"
            value="Dedicated by Most Rev. (Prof.) Augustine Ndubueze Echema"
          />
          <Item label="Dedication Date" value="1st march, 2025" />
        </Section>

        {/* Foundations */}
        <Section title="Foundational Roots">
          <Item
            label="Original Worship Location"
            value="Ngwa High School, Aba"
          />
          <Item
            label="First Priest to Minister"
            value="Rev. Fr. Charles Nwamaghioha (late)"
          />
          <Item
            label="Parish of Origin"
            value="SS Anthony & Jude Catholic Church, Umungasi, Aba"
          />
          <Item
            label="Bishop Who Named the Church"
            value="Most Rev. Dr. A. G. Nwedo (CSSP) (late)"
          />
        </Section>

        {/* Land & Structures */}
        <Section title="Land & Infrastructure">
          <Item
            label="Permanent Site Location"
            value="Egbelu Ayaba–Umueze Village, Abayi"
          />
          <Item
            label="Land Size"
            value="About 6 hectares (with later expansions)"
          />
          <Item label="Major Church Building" value="Pro-Cathedral Church" />
        </Section>

        {/* Leadership */}
        <Section title="Leadership">
          <Item
            label="Current Parish Priest"
            value="Rev. Fr. Dr. Joseph Azuka Anuonye, PhD"
          />
          <Item
            label="First Resident Priest"
            value="Rev. Monsignor Dr. I. I. Alaribe (1996)"
          />
        </Section>

        {/* Education */}
        <Section title="Education & Institutions">
          <Item
            label="Parish Schools"
            value="Stella Maris Nursery & Primary School; Stella Maris Secondary School"
          />
          <Item
            label="First School Headmistress"
            value="Mrs. Dorothy Achumba"
          />
          <Item
            label="Pioneer Secondary School Principal"
            value="Sir B. U. Anyadike"
          />
        </Section>

        {/* Outstation */}

        {/* Vocations */}
        <Section title="Vocations from the Parish">
          <Item
            label="First Priest Ordained"
            value="Rev. Fr. Chidi Ekpendu (2002)"
          />
          <Item label="Number of Priests" value="Over 12 Catholic priests" />
          <Item
            label="Religious Sisters"
            value="Members of MPHA, MSBS, TMML, DMMM and other congregations"
          />
        </Section>

        {/* Societies */}
        <Section title="Lay Organizations">
          <Item
            label="Major Societies"
            value="Catholic Men Organization (CMO), Catholic Women Organization (CWO), Catholic Youth Organization of Nigeria (CYON)"
          />
          <Item
            label="Other Pious Societies"
            value="Legion of Mary, Divine Mercy, CBIU, CCRN, Sacred Heart, Immaculate Heart, Guild of St. Anthony, Block Rosary, Holy Childhood, St. Vincent de Paul, and others"
          />
        </Section>

        {/* Motto */}
        <Section title="Identity & Motto">
          <Item
            label="Parish Identity"
            value="A Marian parish rooted in faith, education, vocation, and service"
          />
          <Item
            label="Parish Slogan"
            value="Stella Maris! Mma anyi si na Chi."
          />
        </Section>
      </div>
    </section>
  );
}

/* Reusable components */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#D4A73B] p-4">
      <p className="text-sm capitalize font-bold text-[#72540f]">{label}</p>
      <p className="font-medium mt-1">{value}</p>
    </div>
  );
}
