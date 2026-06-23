import Container from "@/components/Container";
import Button from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="bg-sand-50 py-24 sm:py-32">
      <Container className="text-center">
        <div className="mx-auto w-fit opacity-90">
          <LogoMark size={64} />
        </div>
        <p className="mt-6 font-display text-6xl font-bold text-brand-700">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-brand-950">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          The page you&rsquo;re looking for may have moved. Let&rsquo;s get you
          back to safe ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
