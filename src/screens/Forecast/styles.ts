import { styled } from '~/modules';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const ChildrenWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 25 },
})``;
