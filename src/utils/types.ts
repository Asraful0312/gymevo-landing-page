export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourlasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
