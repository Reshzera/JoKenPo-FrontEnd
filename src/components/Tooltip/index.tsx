import React from 'react';
import * as TooltipRadix from '@radix-ui/react-tooltip';

// import { Container } from './styles';

type TooltipProps = {
  children: React.ReactNode;
  content: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content>
            <TooltipRadix.Arrow />
            {content}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

export default Tooltip;
