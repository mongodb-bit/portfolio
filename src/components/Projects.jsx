import { motion } from "framer-motion";

export default function Projects() {

  const cardVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const projects = [
    {
      title: "Multi-Patient Triage System and Vital Monitoring",
      desc: "IoT wearable that measures heart rate and SpO2 and streams data to a dashboard.",
      tech: ["ESP32", "MQTT", "React"]
    },
{
  title: "E-Commerce Backend",
  desc: " Built a scalable backend for an e-commerce platform with payment integration and RESTful APIs.",
  tech: ["Node.js", "Express.js", "PostgreSQL", "Razorpay"],
  link: "https://github.com/mongodb-bit/E-Commerce-Backend",
},
{
  title: "Expense Tracker Backend",
  desc: "Built a modular backend for an expense tracking application with secure JWT authentication and RESTful APIs for managing users, accounts, and financial transactions.",
  tech: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
  link: "https://github.com/mongodb-bit/expense-tracker-backend"
},
{
  title: "BLDC Motor RPM Sensing Unit",
  desc: "Developed an RPM sensing system for BLDC motors using back-EMF signal analysis. Filtered noisy phase signals with an LM358 comparator and calculated motor speed using an ESP32 microcontroller.",
  tech: ["ESP32", "BLDC Motor", "LM358 Comparator", "ESC"],
}
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition hover:-translate-y-2"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-500/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="text-blue-400 text-sm hover:underline">
                <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 text-sm hover:underline"
>
  View Project →
</a>
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}