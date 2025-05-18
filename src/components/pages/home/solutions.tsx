import { CheckCircle, XCircle } from "lucide-react"

const problems = [
  "Most email tools are expensive or limit your outreach",
  "Cold emails often land in spam",
  "Manual follow-ups are a waste of time",
]

const solutions = [
  "DevFree is a free tool for developers",
  "Personalize emails, schedule outreach, and track engagement",
  "No more bloated tools",
]

export default function Solutions() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
            Stop Paying For <span className="text-primary">Overpriced Outreach Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DevFree gives you all the tools you need for effective outreach without the hefty price tag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Problems Section */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 shadow-sm">
            <h3 className="flex items-center text-xl font-bold mb-6 pb-3 border-b border-destructive/10">
              <XCircle className="mr-2 h-5 w-5 text-destructive" />
              Common Problems
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="mr-3 h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 shadow-sm">
            <h3 className="flex items-center text-xl font-bold mb-6 pb-3 border-b border-primary/10">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
