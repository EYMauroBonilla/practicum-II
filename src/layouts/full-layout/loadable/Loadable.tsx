import React, { Suspense, ComponentType } from 'react';

// project imports
import Spinner from '../../../views/spinner/Spinner';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LoadableComponent: React.FC<P> = (props) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

  // Add display name to the component
  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;

  return LoadableComponent;
};

export default Loadable;