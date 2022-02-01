import FormItem from 'antd/lib/form/FormItem';
import { isString } from 'lodash';
import { useTranslation } from 'react-i18next';
import { CustomFormItemProps } from '../../../model';
import { Payee, PayeeControl } from './PayeeControl';

export function PayeeItem({ label, name, onChange }: CustomFormItemProps<Payee>) {
  const { t } = useTranslation();

  return (
    <FormItem
      name={name}
      label={isString(label) ? t(label) : label}
      rules={[
        { required: true },
        {
          validator(_, value: Payee) {
            const { type, account } = value;

            if (type !== 'Account') {
              return Promise.resolve();
            }

            return account ? Promise.resolve() : Promise.reject();
          },
          message: t('You must set a payee account'),
        },
      ]}
    >
      <PayeeControl onChange={onChange} />
    </FormItem>
  );
}