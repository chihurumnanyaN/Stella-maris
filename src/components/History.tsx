// components/History.tsx
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { ReactNode, ElementType } from "react";
import { FaChurch, FaFlag, FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const History: React.FC = () => {
  return (
    <section className="py-12 px-3 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          History of Stella Maris Catholic Church, Abayi-Aba
        </h1>
        <p className="text-center text-gray-600 mb-12 italic">
          Compiled by Lady Patricia N. Okeke (LAUX)
        </p>
        {/* Section 1 */}
        <HistoryDrop
          title="Foundation (1979–1988)"
          short={
            <>
              {" "}
              <p>
                Stella Maris Catholic Church, Abayi-Aba as we know it today,
                started in 1988 and the seed of the church was sown in 1979,
                when a devout Catholic and then Principal of Ngwa High School,
                Aba, Mr. Ralph O. Onyeaghala invited the Parish Priest of Holy
                Trinity Church, Obuzor to minister to the spiritual needs of his
                Catholic students.
              </p>
              <br />
              <p>
                The priest, Rev Fr Charles Nwamaghioha (Late) soon started
                visiting the school for masses. Catholics around the school who
                hitherto had been attending masses in far away CKC, St Eugene,
                SS Anthony & Jude and Holy Trinity Obuzor joined the students in
                their worship. This was the nucleus of the Catholic Church in
                Abayi.
              </p>
              <br />
              <p>
                When a Campus of Imo State University premises was sited at Ngwa
                High School, Abayi Aba, a vibrant community made up of students
                and staff of the university and the neighborhood Catholics soon
                sprang up.
              </p>
              <p>
                Jurisdiction over the new church at Abayi passed to Rev. Fr
                Nwamaghioha (late), Parish Priest of SS Anthony and Jude,
                Umungasi Aba. Rev. Fr. Anthony Nwogu succeeded him, followed
                towards the end of 1981 by Rev. Fr Gabriel Okafor who continued
                ministering to the church at Abayi.
              </p>
            </>
          }
          icon={FaFlag}
        >
          <p>
            Religious groups soon sprang up, notably the virile Nigerian
            Federation of Catholic Students (NFCS), supported morally and
            financially by SS Anthony and Jude parish. Patrons included Sir
            Eugene Nwaokonko (late) and Chief (later Eze) F. O Ogoke (late),
            station council chairman. Key figures: Mr. Hyacinth Okonkwo
            (Secretary), Mr. Christopher Amadi (Catechist), Mr. Leo Amanfor
            (NFCS President), Mr. Sylvester Mbafor (Secretary), Chief Sir and
            Lady F. U Akwarandu (late), and Mr. Vitalis Unachukwu (Sacristan).
          </p>
          <p>
            About 1983, the University moved to Uturu. Ngwa High School returned
            to its original compound, and the church faced new landlords who
            barely tolerated Catholic worship. Under Catholic Principals like
            late Sir C. O. P Uzor and Sir S. Mbamalu, accommodation was
            available; otherwise, discomfort grew. The search for a new site
            began after Bishop Most Rev Dr. A.G. Nwedo (CSSP) (late) expressed
            desire for a Parish in Abayi or Osisioma area.
          </p>
          <p>
            Through efforts of Chief (later Eze) Ogoke (late), Sir D.S. lgbokwe
            (late), Mr. Lawrence Onwuegbuchulam, Chief Oliver Ukwunna (late) and
            others, the present site—about five hectares owned by Umuduofor
            family in Egbelu Ayaba-Umueze village—was acquired. We are grateful
            to late Sir D. S. lgbokwe for his pioneering role. Landlords
            included Rowland Ogbonna, Elder Godwin Ogbonna, Chief William
            Ntiaju, Inspector Ojimaga, Jacob Erondu, Emma Neeobia and Ndubuisi
            Ochieze.
          </p>
          <p>
            Bishop Nwedo assisted Rev. Fr. Gabriel Okafor in paying for the
            land; Barrister Louis Okonkwo (Justice Okonkwo, Late) drafted the
            agreement. Access roads were secured: one purchased from Chief Nath
            Ajaegbu, the alternative donated by Sir Ben Nnadozie (late) with Mr.
            Irondi Nnakwu.
          </p>
          <p>
            Rev Fr Gabriel Okafor was succeeded by Rev. Monsignor Cosmos Obiego
            (late). Chief Sir James Nworgu (KSM) became Station Council Chairman
            and Ezinne Regina Egeleonu (late) CWO president. Hostility at Ngwa
            High School galvanized action; work began under builder Mr. Bernard
            C. Iheanacho.
          </p>
          <p>
            The dream was realized on Sunday, 1 May 1988, when the first Holy
            Mass on the new site was celebrated by Rev. Fr. (now Monsignor)
            Obiego (late), assisted by Rev. Fr. Dr. Peter Anozie. Bishop Nwedo
            chose the name “STELLA MARIS” (Star of the Sea).
          </p>
        </HistoryDrop>
        {/* Section 2 */}
        <HistoryDrop
          short="The relocation became imperative due to growing discomfort at Ngwa
              High School after the University's departure. Rev Fr Gabriel
              Okafor completed the land purchase before his transfer."
          icon={FaChurch}
          title="Relocation & Land Acquisition"
        >
          <p>
            Monsignor Cosmos Obiego (late) and Chief Sir James Nworgu mobilized
            the faithful to commence work on the new site. The five-hectare land
            in Egbelu Ayaba-Umueze village was secured through collective
            effort, with Bishop Nwedo providing financial assistance and Barr.
            Louis Okonkwo handling legal documentation. Access routes were
            kindly provided—one purchased, one donated—laying the foundation for
            the permanent home of Stella Maris.
          </p>
        </HistoryDrop>
        {/* Section 3 */}
        <HistoryDrop
          short="  Monsignor I. I. Alaribe (late) succeeded Monsignor Obiego as
              Parish Priest. Under him, Stella Maris saw tremendous development.
              In 1996 he became the first resident priest. He mobilized
              projects: exit doors (funded by Catholic communities), marble
              altar floor (Joseph Obioha), sacristy, main gate, pipe-borne water
              (Chief Gabriel Ndubuisi late; earlier by Sir Augustine Onyemaorji
              late), fans, pews, perimeter fencing, podium flanked by CCRN and
              St. Monica halls. New land was acquired; foundations laid for a
              two-storey school block (now named after him) and CWO building.
              Sir C. J. Nwaukwa (late) donated 5 plots for a future out-station.
            "
          icon={FaUsers}
          title="Early Priests & Growth"
        >
          <p>
            He established Stella Maris Nursery/Primary School with Mrs. Dorathy
            Achumba as pioneer Headmistress. Parochial Vicars included Frs
            Joachim Nnanna, Victor Kanu, Alex Okonkwo, Nelson Ogwuebgu (SMMM).
          </p>
          <p>
            Many vocations emerged: Priests ordained from the parish include
            Rev. Frs Chidi Ekpendu (2002), Christopher Obi (2003), Anthony Mmoh
            (2007), Greg Chidi Obiodu (2013), Gerald Chukwudi Obi (SMMM, 2014),
            Christopher C. Nwanyanwu (2017), Evaristus O. Asika (2018), Emmanuel
            A. Anyanwu (2020), Chimaobi Uzome Mbawike (SMMM, 2021), Anthony Ibeh
            (2022), Maxwell Amaobi (2023), Bede Princewill U. Uzoka (2023), and
            Deacon Cyracus Eche (2025). Sisters include Perpetual Ekperi (MPHA),
            Rosemary Emengaha (MSBS), Rose Oriaku (TMML), Gertrude Nwogwugwu
            (DMMM), Regina Oluchi Ahuama, Theresa Oluchi Michael, Felicia Igwe.
          </p>
          <p>
            Subsequent priests: Fr. Anthony Omenihu (from 2002) achieved formal
            parish inauguration on 2 August 2003, opened St. Anthony of Padua
            out-station at Umuamacha, and commissioned Stella Maris Secondary
            School (September 2003, pioneer Principal Sir B. U Anyadike). Fr.
            Edmund Ogbonna (short tenure due to health), Fr. Bona Akwarandu
            (expanded land, laid foundation for pro-cathedral, 2009), Fr. Leo M.
            Eze CSSP (2008–2016: advanced pro-cathedral to roofing, built Stella
            Maris road, expanded land, constructed Holy Family Secretariat and
            CBIU Hall).
          </p>
        </HistoryDrop>
        {/* Section 4 */}
        <HistoryDrop
          short="Stella Maris became a full parish on 2 August 2003 under Fr.
              Anthony Omenihu. The parish celebrated its Silver Jubilee on 13
              February 2022 under Rev. Fr. Dr. Joseph A. Anuonye. It hosted the
              2023 Diocesan Priestly Ordination. We express sincere gratitude to
              His Lordship Most Rev. (Prof) Augustine Ndubueze Echema, Bishop of
              Aba Diocese, who dedicated this church."
          icon={FaChurch}
          title="Parish Status & Dedication"
        >
          {" "}
          Parish Status & Dedication
          <p className="font-semibold mt-4">
            May Our Blessed Mother Mary, Star of the Sea (Stella Maris) continue
            to pray for us. To God be the glory. Stella Maris! Mma anyi si na
            Chi.
          </p>
        </HistoryDrop>
        {/* Section 5 */}
        <HistoryDrop
          title="Schools & Societies"
          short=" Stella Maris Nursery/Primary School was founded under Monsignor
              Alaribe. Stella Maris Secondary School opened in 2003. Rev. Fr.
              Paschal I. Ubah serves as School Manager, witnessing growth and
              excellent performance in BECE, WAEC, and NECO. Principals: Sir B.
              U Anyadike (pioneer), Mr. Peter Onene, Dr. Peter Ekechukwu.
              Headmistresses: Mrs. Dorothy Achumba, Mrs. Helen Anyanwu, Ms.
              Ngozi Anyanwu, Mrs. Precious Achomadu."
          icon={FaPeopleGroup}
        >
          <p>
            The Laity Council collaborates closely with priests. CMO grew from
            one group (St. Paul) to eight: St Paul, St Peter, St Joseph, St
            Vincent de Paul, St Patrick, St Joachim, Prince of Peace, St
            Augustine (sponsored Leo Madu Ezeji building). CWO from two (St Ann,
            St Theresa) to eight: St Ann, St Theresa, St Monica, Holy Family,
            Our Lady of Mt. Carmel, Maria Assumpta, St Agnes, St Rita. CYON has
            shown remarkable growth and contributions.
          </p>
          <p>
            Pious societies include CBIU, CCRN, CBMN, Block Rosary, Sacred
            Heart, Immaculate Heart, Guild of St. Anthony, Holy Ghost Vocation
            Movement, Legion of Mary, Mary League Girls, Eucharistic League,
            Divine Mercy, St Vincent de Paul (Help the Needy), Our Lady of
            Perpetual Help, Holy Childhood. Liturgical groups: Choir, Altar
            Servers, Lay Readers, Ministers of Hospitality.
          </p>
        </HistoryDrop>
        {/* Section 6 */}
        <HistoryDrop
          short="Fr. Stephen Ezema (from 2016) introduced weekly Disciples of Mercy
              Adoration, built the BVM Grotto, secured asphalting of Stella
              Maris Road by Gov. Okezie Ikpeazu, laid foundation for KSM
              Sub-Council Chamber, increased land by two plots, and boosted
              spirituality and membership."
          icon={FaChurch}
          title="Recent Developments (Present Day)"
        >
          <p>
            Rev. Fr. Dr. Joseph A. Anuonye (from May 2021) brought orderliness:
            reconstructed presbytery and boys' quarters with aluminum roofs,
            modern landscaping, flood control, concreted compound, rearranged
            power supply, completed fibre windows, erected fences for new access
            road, built magnificent altar (Obioha family/Dr. Collins Obioha),
            rehabilitated roofing/ceiling, added public restrooms, concrete
            landscaping, flowering, repositioned gate, roofed/plastered CMO
            building, provided water system lavatory. Parish won Diocesan
            Symbolic gift in 2024 Cathedraticum.
          </p>
          <p>
            Current leadership includes Sir Dr. Nwaocha Ernest Ifeanyichukwu PhD
            (Vice Chairman), Lady Patricia Okeke (Secretary), Sir Joannes Nwosu
            (Asst. Secretary), Robert Mba & Lady Gloria Eche (Finance), Bro
            Matthew Obiodu (Laity Chairman), Chief Sir Ugochukwu Akwarandu (CMO
            President), Lady Eucharia U. Osuala (CWO President), Bro Uchechi G.
            Nwokeke (CYON President), Sir Polycarp Obi (Works Chairman), Bro.
            Maurice Opara (Works Secretary).
          </p>
        </HistoryDrop>
        <p className="text-center text-gray-700 mt-12 italic">
          We pay homage to all parishioners—living and deceased—whose
          contributions made this possible. Ad maiorem Dei gloriam.
        </p>
      </div>
    </section>
  );
};

export default History;
interface HistoryDropProps {
  title: string;
  icon: ElementType;
  short: ReactNode;
  children: ReactNode;
}

const HistoryDrop = ({
  icon: Icon,
  short,
  children,
  title,
}: HistoryDropProps) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);

  return (
    <div className="mb-6 w-full overflow-hidden ">
      {/* Header */}
      <button
        type="button"
        onClick={() => setDropOpen((prev) => !prev)}
        className="flex w-full items-center gap-4 rounded-md bg-[#D4A73B] px-6 py-4 text-left font-semibold text-white transition hover:opacity-90"
      >
        <Icon className="text-2xl shrink-0" />
        <h2 className="text-xl">{title}</h2>
      </button>

      {/* Short summary (always visible) */}
      <div className="px-3 pt-6 pb-4 prose prose-sm md:prose-base max-w-none text-muted-foreground">
        {short}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {dropOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-6 prose prose-sm md:prose-base max-w-none text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <div className="px-3 pb-4">
        <button
          type="button"
          onClick={() => setDropOpen((prev) => !prev)}
          className="text-sm font-semibold text-primary"
        >
          {dropOpen ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};
