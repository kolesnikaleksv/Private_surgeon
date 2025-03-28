// import React from 'react';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectPortal } from '@radix-ui/react-select';

function SelectLanguage() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="En" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          position="popper"
          className="dropdown-content-width-fullelectContent bg-main"
        >
          <SelectItem value="Uk">Uk</SelectItem>
          <SelectItem value="En">En</SelectItem>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

export default SelectLanguage;
