import { FileLikeObject } from './file-like-object.class';
export class FileItem {
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    cancel() {
        this.uploader.cancelItem(this);
    }
    remove() {
        this.uploader.removeFromQueue(this);
    }
    onBeforeUpload() {
        return void 0;
    }
    onBuildForm(form) {
        return { form };
    }
    onProgress(progress) {
        return { progress };
    }
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    onError(response, status, headers) {
        return { response, status, headers };
    }
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = undefined;
        this.onSuccess(response, status, headers);
    }
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = undefined;
        this.onError(response, status, headers);
    }
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = undefined;
        this.onCancel(response, status, headers);
    }
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS1pdGVtLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sUUFBUTtJQXdCbEIsWUFBWSxRQUFzQixFQUFFLElBQVUsRUFBRSxPQUE0QjtRQXBCNUUsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUVWLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQVVaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElB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QUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVBLFFBQVEsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVBLFNBQVMsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVBLFdBQVcsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFQSxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZUxpa2VPYmplY3QgfSBmcm9tICcuL2ZpbGUtbGlrZS1vYmplY3QuY2xhc3MnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIsIFBhcnNlZFJlc3BvbnNlSGVhZGVycywgRmlsZVVwbG9hZGVyT3B0aW9ucyB9IGZyb20gJy4vZmlsZS11cGxvYWRlci5jbGFzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUl0ZW0ge1xyXG4gICBmaWxlOiBGaWxlTGlrZU9iamVjdDtcclxuICAgX2ZpbGU6IEZpbGU7XHJcbiAgIGFsaWFzPzogc3RyaW5nO1xyXG4gICB1cmwgPSAnLyc7XHJcbiAgIG1ldGhvZD86IHN0cmluZztcclxuICAgaGVhZGVyczogYW55ID0gW107XHJcbiAgIHdpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgIGZvcm1EYXRhOiBhbnkgPSBbXTtcclxuICAgaXNSZWFkeSA9IGZhbHNlO1xyXG4gICBpc1VwbG9hZGluZyA9IGZhbHNlO1xyXG4gICBpc1VwbG9hZGVkID0gZmFsc2U7XHJcbiAgIGlzU3VjY2VzcyA9IGZhbHNlO1xyXG4gICBpc0NhbmNlbCA9IGZhbHNlO1xyXG4gICBpc0Vycm9yID0gZmFsc2U7XHJcbiAgIHByb2dyZXNzID0gMDtcclxuICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgIF94aHI/OiBYTUxIdHRwUmVxdWVzdDtcclxuICAgX2Zvcm06IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XHJcbiAgcHJvdGVjdGVkIHNvbWU6IEZpbGU7XHJcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnM7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih1cGxvYWRlcjogRmlsZVVwbG9hZGVyLCBzb21lOiBGaWxlLCBvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zKSB7XHJcbiAgICB0aGlzLnVwbG9hZGVyID0gdXBsb2FkZXI7XHJcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuZmlsZSA9IG5ldyBGaWxlTGlrZU9iamVjdChzb21lKTtcclxuICAgIHRoaXMuX2ZpbGUgPSBzb21lO1xyXG4gICAgaWYgKHVwbG9hZGVyLm9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5tZXRob2QgPSB1cGxvYWRlci5vcHRpb25zLm1ldGhvZCB8fCAnUE9TVCc7XHJcbiAgICAgIHRoaXMuYWxpYXMgPSB1cGxvYWRlci5vcHRpb25zLml0ZW1BbGlhcyB8fCAnZmlsZSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVybCA9IHVwbG9hZGVyLm9wdGlvbnMudXJsO1xyXG4gIH1cclxuXHJcbiAgIHVwbG9hZCgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMudXBsb2FkZXIudXBsb2FkSXRlbSh0aGlzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy51cGxvYWRlci5fb25Db21wbGV0ZUl0ZW0odGhpcywgJycsIDAsIHt9KTtcclxuICAgICAgdGhpcy51cGxvYWRlci5fb25FcnJvckl0ZW0odGhpcywgJycsIDAsIHt9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwbG9hZGVyLmNhbmNlbEl0ZW0odGhpcyk7XHJcbiAgfVxyXG5cclxuICAgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGxvYWRlci5yZW1vdmVGcm9tUXVldWUodGhpcyk7XHJcbiAgfVxyXG5cclxuICAgb25CZWZvcmVVcGxvYWQoKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgIG9uQnVpbGRGb3JtKGZvcm06IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4geyBmb3JtIH07XHJcbiAgfVxyXG5cclxuICAgb25Qcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB7IHByb2dyZXNzIH07XHJcbiAgfVxyXG5cclxuICAgb25TdWNjZXNzKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBQYXJzZWRSZXNwb25zZUhlYWRlcnMpOiBhbnkge1xyXG4gICAgcmV0dXJuIHsgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyB9O1xyXG4gIH1cclxuXHJcbiAgIG9uRXJyb3IocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IFBhcnNlZFJlc3BvbnNlSGVhZGVycyk6IGFueSB7XHJcbiAgICByZXR1cm4geyByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH07XHJcbiAgfVxyXG5cclxuICAgb25DYW5jZWwocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IFBhcnNlZFJlc3BvbnNlSGVhZGVycyk6IGFueSB7XHJcbiAgICByZXR1cm4geyByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH07XHJcbiAgfVxyXG5cclxuICAgb25Db21wbGV0ZShyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogYW55IHtcclxuICAgIHJldHVybiB7IHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfTtcclxuICB9XHJcblxyXG4gICBfb25CZWZvcmVVcGxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlzVXBsb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgdGhpcy5vbkJlZm9yZVVwbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgIF9vbkJ1aWxkRm9ybShmb3JtOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25CdWlsZEZvcm0oZm9ybSk7XHJcbiAgfVxyXG5cclxuICAgX29uUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgdGhpcy5vblByb2dyZXNzKHByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gICBfb25TdWNjZXNzKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBQYXJzZWRSZXNwb25zZUhlYWRlcnMpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1VwbG9hZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNTdWNjZXNzID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNDYW5jZWwgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgIHRoaXMuaW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gICBfb25FcnJvcihyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NhbmNlbCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgdGhpcy5pbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMub25FcnJvcihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gICBfb25DYW5jZWwocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IFBhcnNlZFJlc3BvbnNlSGVhZGVycyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVXBsb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2FuY2VsID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICB0aGlzLmluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5vbkNhbmNlbChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gICBfb25Db21wbGV0ZShyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ29tcGxldGUocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XHJcblxyXG4gICAgaWYgKHRoaXMudXBsb2FkZXIub3B0aW9ucy5yZW1vdmVBZnRlclVwbG9hZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIF9wcmVwYXJlVG9VcGxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCB8fCArK3RoaXMudXBsb2FkZXIuX25leHRJbmRleDtcclxuICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==