import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    navigation: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
    hero: z.object({
      name: z.string(),
      role: z.string(),
      intro: z.string(),
      ctaLabel: z.string(),
      social: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
          href: z.string().optional(),
          alt: z.string().optional(),
        })
      ),
    }),
    about: z.object({
      badge: z.string(),
      text: z.string(),
      hireCtaLabel: z.string(),
      availabilityText: z.string(),
      image: z.string(),
    }),
    resume: z.object({
      badge: z.string(),
      intro: z.string(),
      sections: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          items: z.array(
              z.object({
                  title: z.string(),
                  date: z.string(),
                  place: z.string(),
                  url: z.string().optional(),
                  tasks: z.array(z.string()).optional(),
                  customClass: z.string().optional(),
              })
          )
        })
      ),
      backgroundImage: z.string(),
    }),
    services: z.object({
      badge: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          iconAlt: z.string().optional(),
        })
      ),
    }),
    skills: z.object({
      badge: z.string(),
      ctaLabel: z.string(),
      sections: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          icon: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
              percentage: z.number().min(0).max(100),
            })
          ),
        })
      ),
    }),
    projects: z.object({
      badge: z.string(),
      intro: z.string(),
      filters: z.array(z.object({ value: z.string(), label: z.string() })),
      images: z.array(
        z.object({
          src: z.string(),
          title: z.string(),
          alt: z.string(),
          href: z.string().optional(),
          className: z.string(),
          imageClassName: z.string().optional(),
          filteredClassName: z.string().optional(),
          tags: z.array(z.string()).optional(),
        })
      ),
    }),
    contact: z.object({
      badge: z.string(),
      illustration: z.string(),
      form: z.object({
        namePlaceholder: z.string(),
        emailPlaceholder: z.string(),
        subjectPlaceholder: z.string(),
        messagePlaceholder: z.string(),
        submitLabel: z.string(),
      }),
    }),
    footer: z.object({
      designedByLabel: z.string(),
      name: z.string(),
    }),
  }),
});

export const collections = { portfolio };
