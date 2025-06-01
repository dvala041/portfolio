import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"




export default function Home() {
  const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    title: "Ithaca Recovery",
    description: "A calendar platform to help Ithaca Recovery Center manage all of their appointments with their clients.",
    techStack: ["React", "Next.js", "TypeScript", "MongoDB", "Prisma", "Microsoft SSO"],
    imageUrl: "/portfolio/Recovery.png",
    date: "Jan 2025 - May 2025",
    demo: "https://ithaca-recovery-deployment.vercel.app/",
    github: true,
    githubLink: "https://github.com/cornellh4i/ithaca-recovery"
  },
  {
    title: "A Data-Driven Analysis of Olympic Medal Distribution and Bias",
    description: "Analyzed 120 years of Olympic results using regression, clustering, and Monte Carlo simulations to reveal fairness gaps in medal distribution.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "statsmodels"],
    imageUrl: "/portfolio/ORIE 2.png",
    date: "March 2025 - May 2025",
    demo: "/portfolio/Report.pdf",
    github: false,
    githubLink: ""
  },
  {
    title: "Obligo",
    description: "I built a full-stack web app for families to assign, track, and manage recurring household responsibilities with user roles.",
    techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT", "Material-UI"],
    imageUrl: "/portfolio/dashboard.png",
    date: "Jun 2024 – Aug 2024",
    demo: "https://obligo.vercel.app/",
    github: true,
    githubLink: "https://github.com/dvala041/Obligo"
  },
  {
    title: "Intelligent Image Selector",
    description: "I built a Java Swing app with polygon cropping and intelligent scissors using Dijkstra’s algorithm for precision edge detection.",
    techStack: ["Java", "Swing", "JUnit"],
    imageUrl: "/portfolio/ImageSelector.png", // adjust filename if needed
    date: "Apr 2024 – May 2024",
    demo: "https://youtu.be/u2Ccr0wPuh8",
    github: false,
    githubLink: ""
  },
  {
    title: "Lost and Found App",
    description: "I designed an IOS app to help users post, search, and recover lost items across campus.",
    techStack: ["Python", "Swift", "Flask", "SQLAlchemy", "Docker", "Google Cloud"],
    imageUrl: "/portfolio/LostAndFound3.png", // adjust filename if needed
    date: "Apr 2024 – May 2024",
    demo: "https://www.youtube.com/watch?v=DcUpOmtydV8",
    github: true,
    githubLink: "https://github.com/dvala041/Lost_And_Found"
  },
  {
    title: "Portfolio",
    description: "This is the 2nd iteration of my portfolio. I made the first one in a day so I wanted to revamp it.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    imageUrl: "/portfolio/HomePage.png", // adjust filename if needed
    date: "May 2025",
    demo: "",
    github: true,
    githubLink: "https://github.com/dvala041/portfolio"
  },
]
  return (
    <>
    <div className = "bg-gray-800 w-screen min-h-screen">
      {/* HOME SCREEN */}
      <div className = "h-screen w-screen flex flex-col md:flex-row justify-evenly md:justify-around items-center"> 
        <div className = "flex flex-col" >

          {/* Add typing animation to this */}
          {/* <div className = "text-4xl md:text-6xl font-bold text-white">Hey I'm David</div> */}

          {/* Add an animation: I'm a {software developer} {first gen student} {Ecuadorian}*/}
          {/* <div className = "text-white text-2xl">I'm a software developer</div> */}

          <motion.div
              className="text-center lg:text-left lg:flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Hey I'm David!</h1>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: Linkedin, label: "LinkedIn", link: "http://www.linkedin.com/in/david-valarezo-304782245" },
                  { icon: Github, label: "Github", link: "https://github.com/dvala041" },
                  { icon: Mail, label: "Email", link: "mailto:dev38@cornell.edu" },
                  { icon: FileText, label: "Resume", link: "/portfolio/Valarezo_Resume.pdf" },
                ].map((item, index) => (
                  <motion.div key={item.label} variants={fadeInUp}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800 transition-colors"
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </Button>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

        </div>

        {/* Round Picture */}
        <motion.div
          className = "flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className = "h-80 w-80 rounded-full bg-gray-200 m-4"> 
            <Image 
              src="/portfolio/dvProf.PNG"
              width={300}
              height={300}
              alt="David"
              className="rounded-full object-cover h-full w-full"
            />
          </div>
        </motion.div>
        
      </div>

      {/* END OF HOME SCREEN */}

      {/* START OF ABOUT ME SECTION */}

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-700 border-gray-600 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Welcome</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a rising junior at Cornell University's College of Engineering, majoring in Computer Science.
                  I'm originanlly from Hackensack, New Jersey and my parents are both Ecuadorian. I am 
                  a first generation college student and I really enjoy the hands on and problem solving nature
                  of software engineering. Outside of coding I enjoy pretty much any outdoor activity, 
                  reading, board games, and casual video games (especially Mario Kart). 
                  
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* END OF ABOUT ME SECTION */}
      {/* START OF EDUCATION SECTION */}

      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
          >
            <Card className="bg-gray-700 border-gray-600 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Cornell University College of Engineering</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Bachelor of Science in Computer Science
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-lg mb-6">
                  <strong>GPA:</strong> 3.64/4.00 (Dean's List 3/4 Semesters)
                </p>
                <div className = "mb-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">Leadership and Activities:</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Cornell Hack4Impact | Tech Lead</li>
                    <li>• Cornell SHPE | Outreach Chair</li>
                    <li>• ASCEND</li>
                    <li>• Underrepresented Minorities in Computing (URMC)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white">Relevant Coursework:</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Introduction to Analysis of Algorithms</li>
                    <li>• Foundations of Artificial Intelligence</li>
                    <li>• Discrete Structures</li>
                    <li>• Practical Tools for Machine Learning, Data Science, and Operations Research</li>
                    <li>• Object-Oriented Programming and Data Structures</li>
                    <li>• Embedded Systems</li>
                    <li>• Introduction to Backend Web Development</li>
                    <li>• Probability and Statistics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* END OF EDUCATION SECTION */}

      {/* START OF EXPERIENCE SECTION */}
      <section id="experience" class = "py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-700 border-gray-600 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Capital One Intern</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Software Engineering Intern | Summer 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2 text-lg">
                    <li>• Coming Soon!</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* END OF EXPERIENCE SECTION */}
      {/* START OF PROJECTS SECTION */}

      <section id="projects" className="py-20 bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.6, delay: project * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-700 border-gray-600 hover:shadow-lg transition-all duration-300 ">
                  <div className="aspect-video bg-gray-600 rounded-t-lg transition-colors">
                   <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={1000} // Adjust width as needed
                      height={1000} // Adjust height as needed
                      className=" w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {project.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="mb-4">{project.description}</p>
                    <p className="text-sm mb-4 text-white font-normal">
                      <strong>Tech Stack:</strong>
                    </p>
                    {project.techStack.map((tech, index) => (
                      <div
                        className="rounded-xl bg-gray-600 px-4 py-2 text-sm inline-block mr-2 mb-2 text-white"
                        key={index}
                      >
                        {tech}
                      </div>
                    ))}

                    <div className = "flex flex-row justify-around items-center">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-white text-white mt-4 hover:bg-white hover:text-gray-800 transition-colors"
                        >
                          Learn more
                        </Button>
                      </a>
                      {project.github && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full bg-transparent border-white text-white ml-2 mt-4 hover:bg-white hover:text-gray-800 transition-colors"
                          >
                            GitHub
                          </Button>
                        </a>
                      )}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
    </div>
   
      {/* <Container maxWidth="xl" id="mainBody" sx={{ mt: 12 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'center' },
            gap: 4, // Adding some space between the boxes
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image 
              src="/portfolio/dvProf.PNG"
              // src="/portfolio/david8 2.jpg"
              width={300}
              height={300}
              alt="David"
              style={{ borderRadius: '50%' }}      
            />
          </Box>

          <Box
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            <Typography gutterBottom
            sx={{
              textAlign: "center",
              color: 'gray'
            }}
            >
              Hello I'm
            </Typography>
            <Typography variant="h4" gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              David Valarezo
            </Typography>
            <Typography variant = "h5" gutterBottom
            sx={{
              textAlign: "center",
              color: 'lightgray',
              fontweight: 'bold'
            }}
            >
              Software Developer
            </Typography>
            <Stack spacing={2} direction = {'row'} sx={{display: 'flex', justifyContent: 'center', gap: '1rem', mt: 3}}>
              <Link href="/Valarezo_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button class = "btn btn-color-2" >Resume</button>
              </Link>
              <Link href="/contact" rel="noopener noreferrer">
                <button class = "btn btn-color-1">Contact</button>
              </Link>
            </Stack>

            <Stack  direction = {'row'} sx={{display: 'flex', justifyContent: 'center', gap: '1rem', mt: 3}}>
            <Link href="http://www.linkedin.com/in/david-valarezo-304782245" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/portfolio/linkedInLogo.PNG"
              width={40}
              height={40}
              alt="David"
              style={{ borderRadius: '50%' }}
              />
              </Link>
              <Link href="https://github.com/dvala041" target="_blank" rel="noopener noreferrer">
              <Image 
              src="/portfolio/githubLogo.PNG"
              width={40}
              height={40}
              alt="David"
              style={{ borderRadius: '50%' }}
              />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container> */}
    </>
  );
}
