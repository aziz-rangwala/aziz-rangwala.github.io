import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const ProjectDetail = () => {
  const { slug } = useParams();
  
  // Mock project data - in a real app this would come from an API or database
  const projectData = {
    "distributed-kv": {
      "title": "Distributed KV Store",
      "description": "Fault-tolerant key-value store with etcd-style REST APIs, sharding, and BoltDB snapshotting.",
      "fullDescription": "Built a Raft-based fault-tolerant key-value store from scratch, exposing etcd-style REST endpoints, sharding data across nodes, and using BoltDB snapshots for log compaction. Implemented transactional sharding with concurrent Raft groups for intra-shard consensus and two-phase commit (2PC) with two-phase locking (2PL) to guarantee atomic cross-shard transactions.",
      "stack": ["Go", "Raft", "REST", "BoltDB", "Sharding", "2PC", "2PL"],
      "year": "2024",
      "problem": "Driven by a desire to deeply understand strong consistency in distributed environments—especially how systems like Raft maintain correctness under network partitions and node failures.",
      "solution": "Designed a custom Raft-based KV store with leader election, log replication, sharding, and 2PC/2PL for atomic cross-shard operations.",
      "challenges": [
        "Coordinating multiple Raft groups without split-brain during partitions",
        "Implementing efficient BoltDB snapshotting for log compaction",
        "Tuning leader election timeouts for minimal failover latency",
        "Balancing consistency vs. availability in cross-shard transactions"
      ],
      "outcomes": [
        "Achieved 99.9% uptime across 5-node clusters",
        "Reduced data retrieval latency by 65%",
        "Enabled atomic transactions spanning shards",
        "Scaled to handle 10,000+ concurrent connections"
      ],
      "github": "https://github.com/aziz-rangwala/distributed-kv-store",
      "demo": "#"
    },
    "easy-presentor": {
        "title": "Easy Presentor",
        "description": "Real-time AI-powered platform enhancing live presentations through speech-to-text and intelligent slide interaction.",
        "fullDescription": "Built an AI-enhanced presentation assistant to improve audience engagement. Integrated real-time speech-to-text processing using Kafka streams and highlighted relevant slide content using BERT. Automated session summaries post-talk, and deployed the service on Kubernetes with autoscaling to ensure reliability during peak loads.",
        "stack": ["Python", "Django", "Kafka", "MongoDB", "Docker", "Kubernetes", "BERT"],
        "year": "2024",
        "problem": "Live presentations often lack tools that help audiences keep up with fast-paced delivery, making it difficult to retain key information, especially in virtual or hybrid environments.",
        "solution": "Developed a real-time platform using Kafka for low-latency streaming and BERT for slide comprehension, deployed on an autoscaled Kubernetes cluster for reliability.",
        "challenges": [
          "Ensuring sub-500ms latency for speech-to-text pipeline",
          "Integrating semantic matching between transcripts and slides",
          "Autoscaling services in Kubernetes under unpredictable traffic",
          "Designing intuitive and non-intrusive audience interfaces"
        ],
        "outcomes": [
          "Cut average latency to 400ms in real-time captioning",
          "Boosted user comprehension by 40% through slide highlights",
          "Automated summary generation for post-session review",
          "Maintained 99.9% uptime with dynamic scaling"
        ],
        "github": "https://github.com/aziz-rangwala/Easy-Presentor",
        "demo": "#"
      
    },
    "scalable-cloud-gitops": {
        "title": "Scalable Cloud GitOps",
        "description": "GitOps-based infrastructure automation with chaos testing and cost-optimized autoscaling.",
        "fullDescription": "Engineered a scalable and resilient cloud infrastructure using Terraform and Argo CD. Leveraged spot instances, HPA, and GitOps workflows to reduce cost while maintaining high availability. Secured deployments with image scanning and added chaos testing under 10x simulated load to validate reliability and observability.",
        "stack": ["Terraform", "Kubernetes", "Prometheus", "Grafana", "AWS", "Argo CD", "Chaos Mesh", "Trivy"],
        "year": "2024",
        "problem": "Managing infrastructure at scale led to rising costs, deployment drift, and limited observability during failure events—especially under high load conditions.",
        "solution": "Adopted GitOps practices with Argo CD for reliable infrastructure as code, implemented autoscaling using HPA and spot instances for cost-efficiency, and validated system robustness through chaos engineering and continuous monitoring.",
        "challenges": [
          "Balancing cost with uptime using spot instances and autoscaling policies",
          "Ensuring consistent state across environments with GitOps",
          "Injecting realistic failures via Chaos Mesh without impacting availability",
          "Maintaining security through continuous image scanning"
        ],
        "outcomes": [
          "Improved infrastructure resilience under 10x load with zero downtime",
          "Reduced incident response time by 40% via proactive observability",
          "Lowered cloud costs by leveraging autoscaling and spot instances",
          "Achieved consistent multi-env deployments with GitOps automation"
        ],
        "github": "https://github.com/aziz-rangwala/scalable-cloud-gitops",
        "demo": "#"
      },
    "pdf-chat-app": {
      "title": "RAG-powered PDF Chat Application",
      "description": "Retrieval-augmented app enabling context-aware conversations over PDFs.",
      "fullDescription": "Engineered a PDF chat application that leverages retrieval-augmented generation (RAG) to convert static documents into interactive, searchable knowledge bases. Built using LangChain and Streamlit, it supports contextual question-answering over documents, reducing manual lookup time significantly.",
      "stack": ["Python", "LangChain", "Streamlit", "LLM", "FAISS"],
      "year": "2024",
      "problem": "Users often waste hours manually searching through lengthy PDFs for relevant information, leading to inefficiencies in research, support, and documentation-heavy workflows.",
      "solution": "Built a PDF-aware conversational interface that uses RAG and vector embeddings to enable contextual question answering from documents.",
      "challenges": [
        "Parsing and chunking large PDFs for effective context retrieval",
        "Optimizing embedding generation for semantic relevance",
        "Managing memory-efficient document storage using FAISS",
        "Ensuring accurate and concise responses from LLMs"
      ],
      "outcomes": [
        "Reduced manual document analysis time by 60%",
        "Enabled seamless, context-rich Q&A over any PDF",
        "Improved information retrieval accuracy in knowledge workflows",
        "Deployed with lightweight UI for instant usage across teams"
      ],
      "github": "https://github.com/aziz-rangwala/RAG",
      "demo": "#"
    },

    "oneclick": {
      "title": "OneClick",
      "description": "AI-powered cross-platform content publishing with automated captions and visuals.",
      "fullDescription": "Developed a one-click content publishing platform that uses prompt-engineered OpenAI models to generate engaging captions, hashtags, and visuals. Integrated with multiple social platforms via GraphQL and implemented serverless batch posting through Next.js to enable scalable, low-latency publishing workflows.",
      "stack": ["Next.js", "GraphQL", "OpenAI", "Serverless", "Social APIs"],
      "year": "2024",
      "problem": "Creating and distributing content across multiple platforms is time-consuming and often repetitive, requiring creators to manually rewrite posts, generate media, and copy-paste across apps.",
      "solution": "Built a unified tool that automates caption and media generation using OpenAI and enables bulk posting through optimized GraphQL APIs and serverless infrastructure.",
      "challenges": [
        "Prompt engineering for high-quality, platform-specific content",
        "Batch processing across APIs with different rate limits and formats",
        "Minimizing latency and cold starts in serverless deployments",
        "Maintaining content consistency and brand tone across platforms"
      ],
      "outcomes": [
        "Reduced content creation time by 5x",
        "Achieved <400ms latency for bulk posting actions",
        "Enabled seamless publishing to multiple platforms via unified API",
        "Increased user engagement through AI-personalized content"
      ],
      "github": "https://github.com/aziz-rangwala/oneclick",
      "demo": "#"
    },
    "medical-supply-chain": {
      "title": "Medical Supply Chain",
      "description": "Blockchain-based system for tamper-proof pharmaceutical supply tracking.",
      "fullDescription": "Developed a secure and scalable pharmaceutical supply chain platform using HyperLedger Fabric to tackle counterfeit drugs. Ensured traceability of each transaction across the supply lifecycle. Integrated Redis caching and autoscaling microservices for real-time API performance under variable demand.",
      "stack": ["Node.js", "Express", "PostgreSQL", "HyperLedger Fabric", "Docker", "Redis"],
      "year": "2024",
      "problem": "Pharmaceutical supply chains are highly vulnerable to counterfeit drugs due to lack of transparency and traceability across distribution layers.",
      "solution": "Implemented a blockchain-backed traceability system using HyperLedger Fabric for tamper-proof provenance tracking and optimized API responsiveness with Redis caching and scalable microservices.",
      "challenges": [
        "Designing blockchain transactions for real-time traceability without throughput bottlenecks",
        "Maintaining consistency between on-chain and off-chain data layers",
        "Reducing API response times under varying traffic conditions",
        "Handling edge cases like product recalls or data reconciliation"
      ],
      "outcomes": [
        "Ensured secure and immutable tracking of medical supplies",
        "Cut API latency by 3x using Redis and load balancing",
        "Enabled millisecond-level transaction performance",
        "Improved trust and compliance across the pharma distribution network"
      ],
      "github": "https://github.com/aziz-rangwala/Pharma-Supply-Chain",
      "demo": "#"
    },
    "waste-collection-assistor": {
      "title": "Waste Collection Assistor",
      "description": "Real-time, ML-driven waste tracking and classification system with user engagement incentives.",
      "fullDescription": "Developed a smart waste management platform combining real-time geospatial tracking and machine learning classification. Integrated a Redis pub/sub pipeline to optimize collection routes and built an AWS Lambda-deployed Keras model with RedisAI inference for accurate waste type detection. Incentivized proper disposal behavior through a point-based reward system.",
      "stack": ["Python", "Flask", "Redis", "Keras", "AWS Lambda", "RedisAI"],
      "year": "2024",
      "problem": "Urban waste management systems suffer from inefficient pickup routing and frequent misclassification of waste, leading to increased costs and reduced sustainability.",
      "solution": "Implemented a real-time ETL pipeline with Redis and geospatial pub/sub to track pickups, paired with an ML classifier deployed via AWS Lambda for accurate waste sorting. Introduced a reward system to motivate users toward responsible disposal.",
      "challenges": [
        "Ensuring low-latency geospatial updates for real-time route optimization",
        "Designing a scalable Redis pub/sub ETL pipeline for distributed sensors",
        "Training and deploying a lightweight Keras model on Lambda with RedisAI",
        "Creating a fair and abuse-resistant reward incentive system"
      ],
      "outcomes": [
        "Boosted user participation in proper waste disposal by 40%",
        "Reduced mislabeled pickups by 30% through AI-powered classification",
        "Achieved real-time geospatial processing using Redis pub/sub",
        "Deployed a cost-effective, scalable ML inference setup with RedisAI and Lambda"
      ],
      "github": "https://github.com/aziz-rangwala/Waste-Collection-Assistor",
      "demo": "#"
    },
    "datanova": {
      "title": "DataNova",
      "description": "Scalable real-time data pipeline for high-throughput event processing and orchestration.",
      "fullDescription": "Built a fault-tolerant distributed data pipeline capable of processing over 100K events/sec using Kafka for ingestion and Spark for ETL. Automated task workflows and microservice orchestration using Airflow and Docker to reduce operational burden and enable large-scale processing.",
      "stack": ["Python", "Spark", "Airflow", "Kafka", "Cassandra", "Docker"],
      "year": "2024",
      "problem": "Legacy data infrastructure couldn't scale to meet growing real-time data ingestion and transformation demands, resulting in delayed insights and brittle workflows.",
      "solution": "Designed a distributed, high-throughput architecture using Kafka, Spark, and Airflow to ensure reliable streaming, efficient ETL, and orchestrated execution of dependent workflows.",
      "challenges": [
        "Ensuring consistency and fault tolerance in high-volume stream processing",
        "Managing DAG dependencies and task failures in Airflow",
        "Tuning Spark jobs for real-time performance at scale",
        "Balancing throughput and latency with horizontal scalability"
      ],
      "outcomes": [
        "Processed over 100K events/sec with high availability",
        "Reduced manual operational overhead through Airflow automation",
        "Improved pipeline reliability and scalability using containerized services",
        "Accelerated time-to-insight for analytics and downstream consumers"
      ],
      "github": "https://github.com/aziz-rangwala/DataNova",
      "demo": "#"
    }
   
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aziz Rangwala
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/projects" className="text-blue-600 font-medium">Projects</Link>
              <Link to="/blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center gap-2">
              <Link to="/projects">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Projects
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {project.year}
              </Badge>
              <div className="flex gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 dark:text-red-400">🔧 Problem / Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{project.problem}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 dark:text-green-400">💡 Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Challenges */}
          <Card className="mb-12 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-orange-600 dark:text-orange-400">⚡ Technical Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 dark:text-green-400">✅ Outcomes & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
