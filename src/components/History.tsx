import React from "react";
import { motion } from "motion/react";
import { FaChurch, FaFlag, FaUsers } from "react-icons/fa";

const History = () => {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-semibold">Key Milestones</h2>

        <div className="">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`w-full p-6 `}
          >
            <FaFlag className="text-3xl" />
            <h3 className="mt-4 text-xl font-semibold">Foundation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The parish began as a mission station, providing Mass and
              catechesis to early Catholic families in the Abayi community.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui
              quod, aliquam nam consequatur commodi possimus. Aspernatur, minima
              sequi perferendis ex laboriosam fugiat molestias reprehenderit
              eaque, tempore assumenda, dicta fugit sapiente sed inventore
              cupiditate odit ipsam delectus excepturi id. Dolorum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint qui quod,
              aliquam nam consequatur commodi possimus. Aspernatur, minima sequi
              perferendis ex laboriosam fugiat molestias reprehenderit eaque,
              tempore assumenda, dicta fugit sapiente sed inventore cupiditate
              odit ipsam delectus excepturi id. Dolorum.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className={`w-full p-6 `}
          >
            <FaChurch className="text-3xl" />
            <h3 className="mt-4 text-xl font-semibold">Church Dedication</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              With increased membership, Stella Maris Parish was formally
              erected, expanding its liturgical life, societies, and ministries.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui
              quod, aliquam nam consequatur commodi possimus. Aspernatur, minima
              sequi perferendis ex laboriosam fugiat molestias reprehenderit
              eaque, tempore assumenda, dicta fugit sapiente sed inventore
              cupiditate odit ipsam delectus excepturi id. Dolorum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint qui quod,
              aliquam nam consequatur commodi possimus. Aspernatur, minima sequi
              perferendis ex laboriosam fugiat molestias reprehenderit eaque,
              tempore assumenda, dicta fugit sapiente sed inventore cupiditate
              odit ipsam delectus excepturi id. Dolorum.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`w-full p-6 `}
          >
            <FaUsers className="text-3xl" />
            <h3 className="mt-4 text-xl font-semibold">
              Post Dedication (Present Day)
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Today, the parish continues to thrive through active lay
              participation, youth development, and outreach programs. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sint qui quod,
              aliquam nam consequatur commodi possimus. Aspernatur, minima sequi
              perferendis ex laboriosam fugiat molestias reprehenderit eaque,
              tempore assumenda, dicta fugit sapiente sed inventore cupiditate
              odit ipsam delectus excepturi id. Dolorum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sint qui quod, aliquam nam
              consequatur commodi possimus. Aspernatur, minima sequi perferendis
              ex laboriosam fugiat molestias reprehenderit eaque, tempore
              assumenda, dicta fugit sapiente sed inventore cupiditate odit
              ipsam delectus excepturi id. Dolorum.
            </p>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default History;
