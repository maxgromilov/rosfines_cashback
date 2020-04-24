<template>
    <div>
        <image-uploader
            class="upload"
            :class="{ 'is-invalid--vue': error }"
            :preview="false"
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            :capture="capture"
            :debug="1"
            accept=".jpg, .png"
            doNotResize="gif"
            :autoRotate="true"
            outputFormat="string"
            @input="setImage"
            name="receipt"
        >
            <label
                for="fileInput"
                slot="upload-label"
                :class="{ 'upload--loaded': hasImage }"
                class="upload-label"
                :style="`background-image: url(${image || ''})`"
            >
                <div class="upload-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="upload-icon"
                        v-if="!hasImage"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0L24 0 24 24 0 24z" />
                            <path
                                fill="#20273D"
                                fill-rule="nonzero"
                                d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"
                            />
                            <circle
                                cx="13"
                                cy="14"
                                r="3"
                                fill="#20273D"
                                fill-rule="nonzero"
                            />
                            <path
                                fill="#20273D"
                                fill-rule="nonzero"
                                d="M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                            />
                        </g>
                    </svg>

                    <span class="upload-caption">{{
                        hasImage ? 'Чек загружен' : 'Добавить фото чека'
                    }}</span>
                </div>
            </label>
        </image-uploader>
    </div>
</template>

<script>
import ImageUploader from 'vue-image-upload-resize';
export default {
    name: 'CCashReceipt',
    props: {
        error: {
            type: String,
            default: '',
        },
    },

    components: {
        ImageUploader,
    },
    data() {
        return {
            hasImage: false,
            image: null,
            capture: false,
        };
    },
    methods: {
        setImage: function(output) {
            this.hasImage = true;
            this.image = output;
            this.$emit('input', output);
        },
    },
};
</script>

<style lang="scss">
@import '@/components/bootstrap/vars';
#fileInput {
    display: none;
}
.upload {
    height: 70px;
    border-radius: 12px;
    border: dashed 2px #20273d;

    &-label {
        height: calc(100% + 4px);
        width: calc(100% + 4px);
        margin: -2px;
        border-radius: 12px;
        display: flex;
        font-size: $font-size-sm;
        background-size: 102%;
        background-position: center;
        background-repeat: no-repeat;
    }
    &-button {
        position: relative;
        margin: auto;
        line-height: 24px;
    }
    &-icon {
        position: relative;
        margin-right: 0.5rem;
        top: -2px;
    }
    &--loaded {
        position: relative;
        color: $white;
        overflow: hidden;
        &:before {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            position: absolute;
            background-color: rgba(32, 39, 61, 0.5);
        }
    }
}
</style>
