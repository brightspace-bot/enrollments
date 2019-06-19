'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangArImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ar = {
			'changeImage': 'تغيير الصورة',
			'closed': 'مغلق',
			'completed': 'تم الإكمال',
			'completedDaysAgo': 'تم الإكمال منذ {number} من الأيام',
			'completedOn': 'تم الإكمال في {dateTime}',
			'completedToday': 'تم الإكمال اليوم',
			'completedTomorrow': 'سيتم الإكمال غدًا',
			'completedYesterday': 'تم الإكمال بالأمس',
			'continue': 'Continue',
			'continueToModule': 'Continue by navigating to module, {module}',
			'courseOfferingInformation': 'معلومات مضمون المقرر التعليمي',
			'coursePinButton': '{course} is pinned. إلغاء تثبيت المقرر التعليمي',
			'courseSettings': 'إعدادات المقرر التعليمي {course}',
			'description': 'Description',
			'disabled': 'تم التعطيل',
			'dueDaysAgo': 'مضى على تاريخ الاستحقاق {number} من الأيام',
			'dueOn': 'تاريخ الاستحقاق في {dateTime}',
			'dueToday': 'تاريخ الاستحقاق اليوم',
			'dueTomorrow': 'تاريخ الاستحقاق غدًا',
			'dueYesterday': 'كان تاريخ الاستحقاق بالأمس',
			'ended': 'Ended {date} at {time}',
			'endsAt': 'Ends {date} at {time}',
			'enrollmentProgressBar': 'Completed {percentage}% of {title}',
			'inactive': 'غير نشط',
			'new': 'جديد',
			'overdue': 'تم تجاوز تاريخ الاستحقاق',
			'pin': 'تثبيت',
			'pinActionResult': 'تم تثبيت {course}',
			'startsAt': 'Starts {date} at {time}',
			'unpin': 'إلغاء التثبيت',
			'unpinActionResult': 'تم إلغاء تثبيت {course}'
		};
	}
};

export const LangAr = dedupingMixin(LangArImpl);

