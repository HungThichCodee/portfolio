import { Button } from "./Button";

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.19-3.35-1.19-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.54 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.65H9.39V9h3.41v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.26 2.37 4.26 5.45v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

export function SocialLinks({ github, linkedin, email }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button as="a" href={github} target="_blank" rel="noreferrer" variant="ghost">
        <span className="mr-2">
          <IconGitHub />
        </span>
        GitHub
      </Button>
      <Button as="a" href={linkedin} target="_blank" rel="noreferrer" variant="ghost">
        <span className="mr-2">
          <IconLinkedIn />
        </span>
        LinkedIn
      </Button>
      <Button as="a" href={`mailto:${email}`} variant="ghost">
        <span className="mr-2">
          <IconMail />
        </span>
        Email
      </Button>
    </div>
  );
}

