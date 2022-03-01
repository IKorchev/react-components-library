import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string | undefined;
  alt?: string | undefined;
  title: string;
  paragraph: string;
  rounded?: boolean;
  href?: string | undefined;
  linkTitle: string;
  size: 'sm' | 'lg' | 'xl';
}

interface IMGProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string | undefined;
}

const Image = ({ children, src, ...props }: IMGProps) => (
  <img
    className="h-full w-full transform transition duration-300 hover:scale-105 object-cover"
    src={src}
    {...props}
  />
);

const Title = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 {...props} className="text-lg font-semibold truncate">
    {children}
  </h1>
);

const Paragraph = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...props} className="text-sm text-gray-700">
    {children}
  </p>
);

const Link = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => (
  <a
    className="inline-flex px-1 py-1 border border-blue-300 font-semibold rounded-md w-1/2 justify-center text-sm cursor-pointer transition duration-500 hover:bg-blue-100"
    href={props.href}
    {...props}
  >
    {children}
  </a>
);
const Content = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="px-3 py-2 flex flex-col h-1/2 justify-around">{children}</div>
);

// TODO: Extract in a separate file
const truncate = (str: string, charAmount: number): string =>
  str.length > charAmount ? str.substring(0, charAmount) + ' ...' : str;

// should probably use ternary operator but this way seems more clean
const getMaxParagraphChars = (cardSize: 'sm' | 'lg' | 'xl') => {
  switch (cardSize) {
    case 'sm':
      return 60;
    case 'lg':
      return 120;
    case 'xl':
      return 190;
  }
};

export const Card = ({
  img,
  title,
  paragraph,
  rounded,
  alt,
  href,
  linkTitle,
  size,
  ...props
}: CardProps) => {
  const classes: string | undefined = props.className;

  const sizeClasses =
    size === 'xl'
      ? 'w-96 h-96'
      : size === 'lg'
      ? 'w-72 h-80'
      : size === 'sm'
      ? 'w-60 h-72'
      : '';
  return (
    <div
      {...props}
      className={`${classes} ${
        rounded ? 'rounded-lg' : ''
      } ${sizeClasses} flex flex-col overflow-hidden border text-lg focus:ring-2 shadow-lg `}
    >
      <Link
        target="_blank"
        rel="noreferrer"
        href={href}
        className="cursor-pointer w-full h-1/2 overflow-hidden"
      >
        <Image src={img} />
      </Link>
      <Content>
        <Title>{title}</Title>
        <Paragraph>{truncate(paragraph, getMaxParagraphChars(size))}</Paragraph>
        <Link target="_blank" rel="noreferrer" href={href}>
          {linkTitle}
        </Link>
      </Content>
    </div>
  );
};
