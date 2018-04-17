import builderText from 'i18n!translations/builder/nls/template';

export const featureServiceDefaults = {
  basic: {
    fieldSettings: {
      PrimaryPhoto: {
        required: true,
        type: 'photo',
        fieldID: 'PrimaryPhoto',
        label: builderText.contribute.defaultForm.photo.label,
        placeholder: builderText.contribute.defaultForm.photo.placeholder,
        attributeName: builderText.contribute.defaultForm.photo.attribute,
        validations: [],
        isAttachment: true,
        extras: {
          dataType: 'photo',
          minimumSize: 700,
          photoSettings: [{
            name: 'PrimaryPhoto',
            smallestSide: 1000
          },{
            name: 'PrimaryThumbnail',
            height: 200,
            width: 200
          }]
        }
      },
      Name: {
        required: true,
        type: 'text',
        fieldID: 'Name',
        label: builderText.contribute.defaultForm.name.label,
        attributeName: builderText.contribute.defaultForm.name.attribute,
        placeholder: builderText.contribute.defaultForm.name.placeholder,
        validations: ['arcgisSupportedHtml']
      },
	  Amount: {
        required: true,
        type: 'integer',
        fieldID: 'Amount',
        label: builderText.contribute.defaultForm.Amount.label,
        attributeName: builderText.contribute.defaultForm.Amount.attribute,
        placeholder: builderText.contribute.defaultForm.Amount.placeholder,
        validations: []
      },
	  Obs_Type: {
        required: true,
        type: 'text',
        fieldID: 'Obs_Type',
        label: builderText.contribute.defaultForm.Obs_Type.label,
        attributeName: builderText.contribute.defaultForm.Obs_Type.attribute,
        placeholder: builderText.contribute.defaultForm.Obs_Type.placeholder,
        validations: ['arcgisSupportedHtml']
      },
	  Obs_Date: {
        required: true,
        type: 'date',
        fieldID: 'Obs_Date',
        label: builderText.contribute.defaultForm.Obs_Date.label,
        attributeName: builderText.contribute.defaultForm.Obs_Date.attribute,
        placeholder: builderText.contribute.defaultForm.Obs_Date.placeholder,
        validations: []
      },
      LocationName: {
        required: true,
        type: 'location',
        fieldID: 'LocationName',
        label: builderText.contribute.defaultForm.location.label,
        attributeName: builderText.contribute.defaultForm.location.attribute,
        placeholder: builderText.contribute.defaultForm.location.placeholder,
        validations: [],
        extras: {
          dataType: 'location',
          storeGeometry: true
        }
      },
      Description: {
        required: true,
        type: 'textarea',
        fieldID: 'Description',
        label: builderText.contribute.defaultForm.description.label,
        attributeName: builderText.contribute.defaultForm.description.attribute,
        placeholder: builderText.contribute.defaultForm.description.placeholder,
        validations: ['arcgisSupportedHtml']
      }
    }
  }
};

export default {
  featureServiceDefaults
};
