import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
// import AttrTypography from './AttrTypography';

const AttrTypography = dynamic(() => import('./AttrTypography'));

function BrokerAddress({ record }) {
  if (!record.address) {
    return null;
  }
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((v) => {
        const address = record.address[`line_${v}`];
        if (!address || address.trim() === '') {
          return null;
        }
        return (
          <AttrTypography key={v} noIndent={undefined}>{address}</AttrTypography>
        );
      })}
    </>
  );
}

BrokerAddress.propTypes = {
  record: PropTypes.any.isRequired,
};

export default BrokerAddress;
