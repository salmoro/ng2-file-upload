export class FileType {
    static getMimeClass(file) {
        let mimeClass = 'application';
        if (file?.type && this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file?.type?.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file?.type?.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file?.type?.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file?.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (file?.type && this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (file?.type && this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (file?.type && this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (file?.type && this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application' && file?.name) {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    static fileTypeDetection(inputFilename) {
        const types = {
            jpg: 'image',
            jpeg: 'image',
            tif: 'image',
            psd: 'image',
            bmp: 'image',
            png: 'image',
            nef: 'image',
            tiff: 'image',
            cr2: 'image',
            dwg: 'image',
            cdr: 'image',
            ai: 'image',
            indd: 'image',
            pin: 'image',
            cdp: 'image',
            skp: 'image',
            stp: 'image',
            '3dm': 'image',
            mp3: 'audio',
            wav: 'audio',
            wma: 'audio',
            mod: 'audio',
            m4a: 'audio',
            compress: 'compress',
            zip: 'compress',
            rar: 'compress',
            '7z': 'compress',
            lz: 'compress',
            z01: 'compress',
            bz2: 'compress',
            gz: 'compress',
            pdf: 'pdf',
            xls: 'xls',
            xlsx: 'xls',
            ods: 'xls',
            mp4: 'video',
            avi: 'video',
            wmv: 'video',
            mpg: 'video',
            mts: 'video',
            flv: 'video',
            '3gp': 'video',
            vob: 'video',
            m4v: 'video',
            mpeg: 'video',
            m2ts: 'video',
            mov: 'video',
            doc: 'doc',
            docx: 'doc',
            eps: 'doc',
            txt: 'doc',
            odt: 'doc',
            rtf: 'doc',
            ppt: 'ppt',
            pptx: 'ppt',
            pps: 'ppt',
            ppsx: 'ppt',
            odp: 'ppt'
        };
        const chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        const extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
// tslint:disable-next-line:variable-name
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
// tslint:disable-next-line:variable-name
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
// tslint:disable-next-line:variable-name
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
// tslint:disable-next-line:variable-name
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
// tslint:disable-next-line:variable-name
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10eXBlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS10eXBlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxRQUFRO0lBaUVuQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQW9CO1FBQ3RDLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pELFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUssaUJBQWlCLEVBQUU7WUFDM0MsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckUsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8s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QW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtDQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZUxpa2VPYmplY3QgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVR5cGUge1xyXG4gIC8qICBNUyBvZmZpY2UgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICBzdGF0aWMgbWltZV9kb2M6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXHJcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy13b3JkLmRvY3VtZW50Lm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQudGVtcGxhdGUubWFjcm9FbmFibGVkLjEyJ1xyXG4gIF07XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICBzdGF0aWMgbWltZV94c2w6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC50ZW1wbGF0ZScsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0Lm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnRlbXBsYXRlLm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLmFkZGluLm1hY3JvRW5hYmxlZC4xMicsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0LmJpbmFyeS5tYWNyb0VuYWJsZWQuMTInXHJcbiAgXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gIHN0YXRpYyBtaW1lX3BwdDogc3RyaW5nW10gPSBbXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC50ZW1wbGF0ZScsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRlc2hvdycsXHJcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuYWRkaW4ubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5wcmVzZW50YXRpb24ubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5wcmVzZW50YXRpb24ubWFjcm9FbmFibGVkLjEyJyxcclxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5zbGlkZXNob3cubWFjcm9FbmFibGVkLjEyJ1xyXG4gIF07XHJcblxyXG4gIC8qIFBTRCAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgc3RhdGljIG1pbWVfcHNkOiBzdHJpbmdbXSA9IFtcclxuICAgICdpbWFnZS9waG90b3Nob3AnLFxyXG4gICAgJ2ltYWdlL3gtcGhvdG9zaG9wJyxcclxuICAgICdpbWFnZS9wc2QnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL3Bob3Rvc2hvcCcsXHJcbiAgICAnYXBwbGljYXRpb24vcHNkJyxcclxuICAgICd6ei1hcHBsaWNhdGlvbi96ei13aW5hc3NvYy1wc2QnXHJcbiAgXTtcclxuXHJcbiAgLyogQ29tcHJlc3NlZCBmaWxlcyAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgc3RhdGljIG1pbWVfY29tcHJlc3M6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2FwcGxpY2F0aW9uL3gtZ3RhcicsXHJcbiAgICAnYXBwbGljYXRpb24veC1nY29tcHJlc3MnLFxyXG4gICAgJ2FwcGxpY2F0aW9uL2NvbXByZXNzJyxcclxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXHJcbiAgICAnYXBwbGljYXRpb24veC1yYXItY29tcHJlc3NlZCcsXHJcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcclxuICAgICdhcHBsaWNhdGlvbi94LXppcC1jb21wcmVzc2VkJyxcclxuICAgICdhcHBsaWNhdGlvbi96aXAtY29tcHJlc3NlZCcsXHJcbiAgICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcclxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcclxuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAyJ1xyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBnZXRNaW1lQ2xhc3MoZmlsZTogRmlsZUxpa2VPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgbGV0IG1pbWVDbGFzcyA9ICdhcHBsaWNhdGlvbic7XHJcbiAgICBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfcHNkLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ2ltYWdlJztcclxuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZT8ubWF0Y2goJ2ltYWdlLionKSkge1xyXG4gICAgICBtaW1lQ2xhc3MgPSAnaW1hZ2UnO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlPy50eXBlPy5tYXRjaCgndmlkZW8uKicpKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICd2aWRlbyc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGU/LnR5cGU/Lm1hdGNoKCdhdWRpby4qJykpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ2F1ZGlvJztcclxuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ3BkZic7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGU/LnR5cGUgJiYgdGhpcy5taW1lX2NvbXByZXNzLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ2NvbXByZXNzJztcclxuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfZG9jLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgbWltZUNsYXNzID0gJ2RvYyc7XHJcbiAgICB9IGVsc2UgaWYgKGZpbGU/LnR5cGUgJiYgdGhpcy5taW1lX3hzbC5pbmRleE9mKGZpbGUudHlwZSkgIT09IC0xKSB7XHJcbiAgICAgIG1pbWVDbGFzcyA9ICd4bHMnO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlPy50eXBlICYmIHRoaXMubWltZV9wcHQuaW5kZXhPZihmaWxlLnR5cGUpICE9PSAtMSkge1xyXG4gICAgICBtaW1lQ2xhc3MgPSAncHB0JztcclxuICAgIH1cclxuICAgIGlmIChtaW1lQ2xhc3MgPT09ICdhcHBsaWNhdGlvbicgJiYgZmlsZT8ubmFtZSkge1xyXG4gICAgICBtaW1lQ2xhc3MgPSB0aGlzLmZpbGVUeXBlRGV0ZWN0aW9uKGZpbGUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbWVDbGFzcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaWxlVHlwZURldGVjdGlvbihpbnB1dEZpbGVuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdHlwZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHtcclxuICAgICAganBnOiAnaW1hZ2UnLFxyXG4gICAgICBqcGVnOiAnaW1hZ2UnLFxyXG4gICAgICB0aWY6ICdpbWFnZScsXHJcbiAgICAgIHBzZDogJ2ltYWdlJyxcclxuICAgICAgYm1wOiAnaW1hZ2UnLFxyXG4gICAgICBwbmc6ICdpbWFnZScsXHJcbiAgICAgIG5lZjogJ2ltYWdlJyxcclxuICAgICAgdGlmZjogJ2ltYWdlJyxcclxuICAgICAgY3IyOiAnaW1hZ2UnLFxyXG4gICAgICBkd2c6ICdpbWFnZScsXHJcbiAgICAgIGNkcjogJ2ltYWdlJyxcclxuICAgICAgYWk6ICdpbWFnZScsXHJcbiAgICAgIGluZGQ6ICdpbWFnZScsXHJcbiAgICAgIHBpbjogJ2ltYWdlJyxcclxuICAgICAgY2RwOiAnaW1hZ2UnLFxyXG4gICAgICBza3A6ICdpbWFnZScsXHJcbiAgICAgIHN0cDogJ2ltYWdlJyxcclxuICAgICAgJzNkbSc6ICdpbWFnZScsXHJcbiAgICAgIG1wMzogJ2F1ZGlvJyxcclxuICAgICAgd2F2OiAnYXVkaW8nLFxyXG4gICAgICB3bWE6ICdhdWRpbycsXHJcbiAgICAgIG1vZDogJ2F1ZGlvJyxcclxuICAgICAgbTRhOiAnYXVkaW8nLFxyXG4gICAgICBjb21wcmVzczogJ2NvbXByZXNzJyxcclxuICAgICAgemlwOiAnY29tcHJlc3MnLFxyXG4gICAgICByYXI6ICdjb21wcmVzcycsXHJcbiAgICAgICc3eic6ICdjb21wcmVzcycsXHJcbiAgICAgIGx6OiAnY29tcHJlc3MnLFxyXG4gICAgICB6MDE6ICdjb21wcmVzcycsXHJcbiAgICAgIGJ6MjogJ2NvbXByZXNzJyxcclxuICAgICAgZ3o6ICdjb21wcmVzcycsXHJcbiAgICAgIHBkZjogJ3BkZicsXHJcbiAgICAgIHhsczogJ3hscycsXHJcbiAgICAgIHhsc3g6ICd4bHMnLFxyXG4gICAgICBvZHM6ICd4bHMnLFxyXG4gICAgICBtcDQ6ICd2aWRlbycsXHJcbiAgICAgIGF2aTogJ3ZpZGVvJyxcclxuICAgICAgd212OiAndmlkZW8nLFxyXG4gICAgICBtcGc6ICd2aWRlbycsXHJcbiAgICAgIG10czogJ3ZpZGVvJyxcclxuICAgICAgZmx2OiAndmlkZW8nLFxyXG4gICAgICAnM2dwJzogJ3ZpZGVvJyxcclxuICAgICAgdm9iOiAndmlkZW8nLFxyXG4gICAgICBtNHY6ICd2aWRlbycsXHJcbiAgICAgIG1wZWc6ICd2aWRlbycsXHJcbiAgICAgIG0ydHM6ICd2aWRlbycsXHJcbiAgICAgIG1vdjogJ3ZpZGVvJyxcclxuICAgICAgZG9jOiAnZG9jJyxcclxuICAgICAgZG9jeDogJ2RvYycsXHJcbiAgICAgIGVwczogJ2RvYycsXHJcbiAgICAgIHR4dDogJ2RvYycsXHJcbiAgICAgIG9kdDogJ2RvYycsXHJcbiAgICAgIHJ0ZjogJ2RvYycsXHJcbiAgICAgIHBwdDogJ3BwdCcsXHJcbiAgICAgIHBwdHg6ICdwcHQnLFxyXG4gICAgICBwcHM6ICdwcHQnLFxyXG4gICAgICBwcHN4OiAncHB0JyxcclxuICAgICAgb2RwOiAncHB0J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaHVua3MgPSBpbnB1dEZpbGVuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoY2h1bmtzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbic7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSBjaHVua3NbIGNodW5rcy5sZW5ndGggLSAxIF0udG9Mb3dlckNhc2UoKTtcclxuICAgIGlmICh0eXBlc1sgZXh0ZW5zaW9uIF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0eXBlc1sgZXh0ZW5zaW9uIF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==