// Component prop types
import { ViewStyle, TextStyle } from 'react-native';
import { Task, SalahCheckboxState, RecitationInfo } from '../models';

// Button props
export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// Input props
export interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
  label?: string;
  style?: ViewStyle;
}

// Checkbox props
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

// Dropdown props
export interface DropDownPickerProps {
  isFocus: boolean;
  setIsFocus: (focus: boolean) => void;
  data: {label: string; value: string | number}[];
  value: string | number | null;
  setValue: (value: string | number | null) => void;
  search?: boolean;
  placeholder?: string;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
}

export interface DropDownItem {
  label: string;
  value: string | number;
}

// Custom Header props
export interface HijriDateResult {
  day: string | number;
  month: string;
  monthNumber: number;
  year: number;
}

export interface CustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export interface DateCircleProps {
  date: HijriDateResult;
}

export interface SalahTimingsProps {
  startTime: string;
  meridiem: string;
  icon: string;
  name: string;
}

export interface TopRightContainerProps {
  seheri: {hour: string; minute: string};
  iftar: {hour: string; minute: string};
  city: string;
}

// Quran Component props
export interface QuranInputProps {
  dropDownPlaceholder: string;
  inputPlaceholder: string | number;
  setter: React.Dispatch<React.SetStateAction<{unit: string; value: string}>>;
  data?: any[]; // For check-in data
}

export interface BgBoxProps {
  title: string;
  children: React.ReactNode;
  styleprop?: ViewStyle;
}

// Daily Target / Task Component props
export interface TaskItem {
  id: string; // or number, depends on API
  name: string;
  is_completed: boolean;
}

export interface TasksContainerProps {
  task: TaskItem[];
  handleTaskCompletion: (idx: number, taskID: string) => void;
  handleTaskDeletion: (idx: number) => void;
  handleTaskEdit: (idx: number, updatedName: string) => void;
}

export interface TaskProps {
  idx: number;
  name: string;
  complete: boolean;
  handleTaskCompletion: (idx: number, taskID: string) => void;
  handleTaskDeletion: (idx: number) => void;
  handleTaskEdit: (idx: number, updatedName: string) => void;
  taskID: string;
  lastItem: boolean;
}

export interface TaskInputProps {
  idx: number;
  name: string;
  complete: boolean;
  handleTaskDeletion: (idx: number) => void;
  handleEditPress: () => void;
}

export interface EditTaskInputProps {
  taskIdx: number;
  name: string;
  handleTaskEdit: (idx: number, updatedName: string) => void;
  handleEditPress: () => void;
}

export interface EditInputRightIconsProps {
  handleClearInput: () => void;
  handleSubmit: () => void;
}

// Bottom Slider props (Dua Component)
export interface BottomSliderProps {
  title: string;
}

// Popup props
export interface LogoutPopupProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// Top Tab props
export interface CustomTopTabProps {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}
