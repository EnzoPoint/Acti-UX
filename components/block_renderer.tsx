import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@lib/sanity.client'; // Assurez-vous que cette importation correspond à votre setup
import styles from "@styles/components/block-renderer.module.scss";
import { BlockContent as BlockContentType } from "@lib/types"; // Vérifiez ce chemin d'import

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: { _ref: string }) {
  return builder.image(source);
}

interface Block {
  _type: 'block';
  style: string;
  children: BlockChild[];
}

interface BlockChild {
  _key: string;
  _type: 'span';
  text: string;
  marks?: string[];
}

interface ImageBlock {
  _type: 'image';
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface Mark {
  _key: string;
  _type: 'link';
  href: string;
}

interface Props {
  node: Block | ImageBlock;
  children: React.ReactNode;
}

interface MarkProps {
  mark: Mark;
  children: React.ReactNode;
}

const serializers = {
  types: {
    block: ({ node, children }: Props) => {
      if (node._type !== 'block') return null;

      switch (node.style) {
        case 'h1':
          return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
          return <h2 className={styles.h3}>{children}</h2>;
        case 'h3':
          return <h3 className={styles.h3}>{children}</h3>;
        case 'h4':
          return <h4 className={styles.h4}>{children}</h4>;
        default:
          return <p className={styles.p}>{children}</p>;
      }
    },
    image: ({ node }: { node: ImageBlock }) => {
      if (node._type !== 'image' || !node.asset) return null;

      return <img src={urlFor(node.asset).url()} alt={node.alt || 'Sanity image'} className={styles.image} />;
    },
  },
  marks: {
    link: ({ mark, children }: MarkProps) => {
      if (mark._type !== 'link') return children;

      return (
        <a className={styles.} href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    strong: ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
  },
};

const BlockRenderer: React.FC<{ blockContent: BlockContentType[] }> = ({ blockContent }) => {
  return (
    <React.Fragment>
      <BlockContent
        blocks={blockContent}
        serializers={serializers}
        projectId={sanityClient.config().projectId}
        dataset={sanityClient.config().dataset}
      />
    </React.Fragment>
  );
};

export default BlockRenderer;
