import { Github, Linkedin, Quote } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const initialsFor = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const TestimonialsSection = () => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Notes from people I have worked with.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={`${testimonial.name}-${testimonial.role}`}>
              <CardContent className="p-6">
                <Quote className="h-5 w-5 text-primary mb-4" aria-hidden />
                <blockquote className="text-muted-foreground mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    {testimonial.photo ? (
                      <AvatarImage
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    ) : null}
                    <AvatarFallback>{initialsFor(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ""}
                    </p>
                    <div className="flex gap-3 mt-2">
                      {testimonial.linkedin ? (
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${testimonial.name} on LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      ) : null}
                      {testimonial.github ? (
                        <a
                          href={testimonial.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${testimonial.name} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
