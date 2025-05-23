/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import styled from '@emotion/styled';
import { Button, Input } from 'ketcher-react';

export const RnaEditorExpandedContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  backgroundColor: '#F7F9FA',
  borderRadius: '0 0 4px 4px',

  '&.rna-editor-expanded--sequence-edit-mode': {
    padding: '8px',
    paddingTop: '10px',
    border: `2px ${props.theme.ketcher.color.editMode.sequenceInRNABuilder} solid`,
    borderTop: 'none',
  },
}));

export const CompactViewName = styled.input`
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(180, 185, 214, 0.6);

  &:hover,
  &:focus {
    outline: ${({ theme }) => theme.ketcher.outline.selected.small};
  }
`;

export const GroupsContainer = styled.div<{ compact?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ compact }) => (compact ? 'row' : 'column')};
  justify-content: ${({ compact }) =>
    compact ? 'space-between' : 'flex-start'};
  gap: 8px;
  margin-top: 16px;
`;

export const ButtonsContainer = styled.div({
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '8px',
});

export const StyledButton = styled(Button)<{ primary?: boolean }>((props) => {
  return {
    width: '100%',
    whiteSpace: 'nowrap',
    fontSize: props.theme.ketcher.font.size.regular,
    backgroundColor: props.primary
      ? props.theme.ketcher.color.button.primary.active
      : undefined,
    color:
      props.primary && !props.disabled
        ? props.theme.ketcher.color.button.text.primary
        : props.theme.ketcher.color.text.light,
    outline:
      props.primary && !props.disabled
        ? props.theme.ketcher.outline.selected.small
        : props.theme.ketcher.outline.grey.small,
  };
});

export const NameContainer = styled.div<{ selected?: boolean }>((props) => ({
  position: 'relative',
  borderRadius: props.theme.ketcher.border.radius.regular,
  backgroundColor: props.theme.ketcher.color.background.primary,
  boxShadow: props.theme.ketcher.shadow.regular,
  cursor: 'pointer',
  overflow: 'hidden',
  padding: '0 6px 6px 6px',
  display: 'flex',
  alignItems: 'flex-end',
  height: '48px',
  outline: props.selected
    ? props.theme.ketcher.outline.selected.medium
    : 'none',

  ':hover': {
    outline: props.selected ? undefined : props.theme.ketcher.outline.small,
  },
}));

export const NameLine = styled.span<{ selected?: boolean }>((props) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '8px',
  backgroundColor: props.selected
    ? props.theme.ketcher.outline.selected.color
    : props.theme.ketcher.outline.color,
}));

export const NameInput = styled(Input)({
  width: '100%',
  '&:disabled': {
    background: 'none',
    outline: 'none',
    color: 'inherit',
  },
});

export const PresetName = styled.div({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
