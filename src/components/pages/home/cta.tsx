import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 w-screen bg-primary/5 px-4 text-primary">
      <div className="max-w-6xl mx-auto  text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Supercharge Your Outreach?
        </h2>
        <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are sending better emails and getting
          more responses with DevFree.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-secondary hover:bg-blue-50 text-lg px-8"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
}
